import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const mockAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("im a token"), 200);
    });

  const handleLogin = async () => {
    const token = await mockAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
