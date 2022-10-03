import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async ({ email, password }) => {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      // confirm email signup?
      console.log(data);
      console.log('need to confirm email signup');
    }
  };

  const handleLogin = async ({ email, password }) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      setToken(data.session.access_token);
      navigate('/dashboard');
    }
  };

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      setToken(null);
    }
  };

  const value = {
    token,
    handleSignup,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
