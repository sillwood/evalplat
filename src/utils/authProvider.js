import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const mockAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('im a token'), 200);
    });

  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = await mockAuth();
    setToken(token);
    navigate('/dashboard');
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
