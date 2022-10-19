import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { getSession } from './getSession';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState('')
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
            setAlert('There was an error signing up! Please try again.');
        } else {
            setAlert('Please check your email for a confirmation link for your registration.')
        }
    };

    const handleLogin = async ({ email, password }) => {
        let { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error(error);
            // todo: more specific error message
            setAlert('There was an error logging in! Please try again.')
        } else {
            navigate('/dashboard');
        }
    };

    const handleLogout = async () => {
        let { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
            setAlert('There was an error logging out! Please try again.')
        } else {
            navigate('/home');
        }
    };

    const value = {
        user,
        isLoading,
        alert,
        setAlert,
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
