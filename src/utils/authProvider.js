import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { getSession } from './getSession';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const session = await getSession();
      setUser(session?.user ?? null);
      setIsLoading(false);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const navigate = useNavigate();

  const handleSignup = async ({ email, password }) => {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
      // todo: toast
    } else {
      // todo: toast
      // confirm email signup?
      // make toast notification to check email and sign in
      // check on the confirmation link sent to your email address to confirm your account
      console.log(data);
      console.log('need to confirm email signup');
    }
  };

  const handleLogin = async ({ email, password }) => {
    let { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      // todo: toast
    } else {
      navigate('/dashboard');
    }
  };

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      // todo: toast
    } else {
      navigate('/home');
    }
  };

  const value = {
    user,
    handleSignup,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading && <p>Loading...</p>}
      {children}
    </AuthContext.Provider>
  );
};
