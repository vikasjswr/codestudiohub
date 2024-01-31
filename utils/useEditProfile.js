import { useState } from "react";
import { useAuth } from "../AuthContext";

const useSignupForm = (navigation) => {
  const {
    isLoading,
    success,
    error,
    setIsLoading,
    setSuccess,
    setError,
    setPopupMessage,
  } = useAuth();

  const [editedUsername, setEditedUsername] = useState("");
  const [editedDesignation, setEditedDesignation] = useState("");

  const handleEditProfileData = async () => {
    if (!validateFields()) {
      return;
    }
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", editedUsername);
      formData.append("designation", editedDesignation);

      console.log(editedUsername);
      console.log(editedDesignation);

      const response = await fetch(
        "https://app.codestudiohub.com/user_panel/update_profile.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();

      if (responseData.status) {
        // Registration successful
        setSuccess(true);
        setError(false);
        setPopupMessage(responseData.message);
        setEditedUsername("");
        setEditedDesignation("");
        // console.log("Success", "User registered successfully");
      } else {
        // Registration failed, show an error message
        setSuccess(false);
        setError(true);
        setPopupMessage(responseData.message);
        // console.log("Error show in customhook", responseData.message);
      }
    } catch (error) {
      setSuccess(false);
      setError(true);
      // console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateFields = () => {
    // Add your validation checks here
    if (!editedUsername || !editedDesignation) {
      setSuccess(false);
      setError(true);
      setPopupMessage("All fields are required");
      return false;
    }

    return true;
  };

  return {
    isLoading,
    success,
    error,
    editedUsername,
    setEditedUsername,
    editedDesignation,
    setEditedDesignation,
    handleEditProfileData,
  };
};

export default useSignupForm;
