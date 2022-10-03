import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
      } else {
        console.log('token hereee ', data.session.access_token);
        setToken(data.session.access_token);
        navigate('/dashboard');
      }
    };

    getToken();
  }, [token, navigate]);

  const handleLogin = async ({ email, password }) => {
    let { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
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

// // login
// const signInWithEmail = async () => {
//   const { user, error } = await supabase.auth.signIn({
//     email: 'example@email.com',
//     password: 'example-password',
//   });
// };

// //logout
// const logout = async () => {
//   const { error } = await supabase.auth.signOut();
// };
