import { useState } from "react";
import { useAuth } from "../AuthContext";

const useSignupForm = (navigation) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const {
    isLoading,
    success,
    error,
    setIsLoading,
    setSuccess,
    setError,
    popupMessage,
    setPopupMessage,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async () => {

    if (!isChecked) {
      // Display an alert or handle the case where the checkbox is not checked
      setSuccess(false);
      setError(true);
      setPopupMessage("Please agree to the terms and conditions");
      return;
    }


    if (!validateFields()) {
      return;
    }
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);

      const response = await fetch(
        "http://app.codestudiohub.com/user_panel/register.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status == 200) {
        const responseData = await response.json();

        if (responseData.status) {
          // Registration successful
          setSuccess(true);
          setError(false);
          setPopupMessage(responseData.message);
          // console.log("Success", "User registered successfully");
          navigation.navigate("Home");
        } else {
          // Registration failed, show an error message
          setSuccess(false);
          setError(true);
          setPopupMessage(responseData.message);
          // console.log("Error show in customhook", responseData.message);
        }
      } else {
        // Handle non-OK response (e.g., server error)
        setSuccess(false);
        setError(true);
        // console.log("Error", "Error during registration");
      }
    } catch (error) {
      setSuccess(false);
      setError(true);
      // console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number pattern
    return phoneRegex.test(phoneNumber);
  };

  const validateEmail = (emailAddress) => {
    // You can use a more sophisticated email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress);
  };

  const validateFields = () => {
    // Add your validation checks here
    if (!name || !email || !password || !phone) {
      setSuccess(false);
      setError(true);
      setPopupMessage("All fields are required");
      return false;
    }

    if (!validateEmail(email)) {
      setSuccess(false);
      setError(true);
      setPopupMessage("Invalid email address");
      return false;
    }

    if (!validatePhone(phone)) {
      setSuccess(false);
      setError(true);
      setPopupMessage("Invalid phone number");
      return false;
    }

    // Additional validation checks if needed

    return true;
  };

  return {
    isPasswordShown,
    setIsPasswordShown,
    isChecked,
    setIsChecked,
    isLoading,
    success,
    error,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    handleSignup,
  };
};

export default useSignupForm;
