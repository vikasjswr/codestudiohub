import { useState } from "react";
import { useAuth } from "../AuthContext";

const useLoginForm = (navigation) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const handleRememberMeToggle = () => {
    setIsChecked((prev) => !prev);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      // Basic validatio
      if (!email || !password) {
        console.error("Email and password are required.");
        return { success: false, message: "Email and password are required." };
      }

      // Make an API call to authenticate the user
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(
        "http://app.codestudiohub.com/user_panel/login.php",
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
    } catch {
      setSuccess(false);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    email,
    password,
    isPasswordShown,
    isChecked,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleRememberMeToggle,
    handleLogin,
  };
};

export default useLoginForm;
