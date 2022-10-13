import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { UserForm } from '../components/UserForm';

export const Home = () => {
    const { bool } = useParams();
    const isSigningUpDefault = bool ?? false;

    const [isSigningUp, setIsSigningUp] = useState(isSigningUpDefault);
    const [formState, setFormState] = useState({ email: '', password: '' });
    const { handleSignup, handleLogin } = useAuth();

    const handleTabChange = () => {
        setFormState({ email: '', password: '' });
        setIsSigningUp(!isSigningUp);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const validateInput = () => {
        const validEmail =
            formState.email.includes('@') && formState.email.includes('.');
        const validPassword = formState.password.length >= 6;
        return validEmail && validPassword;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const canSubmit = validateInput();
        if (canSubmit) {
            isSigningUp ? handleSignup(formState) : handleLogin(formState);
        } else {
            // todo: toast
            // please provide a valid email address and a password longer than 6 characters.
            console.log('password or email invalid');
        }
    };

    return (
        <div>
            <UserForm
                isSigningUp={isSigningUp}
                formState={formState}
                handleTabChange={handleTabChange}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};
