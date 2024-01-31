import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [show, setShow] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        success,
        error,
        setIsLoading,
        setSuccess,
        setError,
        popupMessage,
        setPopupMessage,
        show,
        setShow
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
