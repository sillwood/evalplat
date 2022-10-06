import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

export const Login = () => {
  // isSigningUp from params?
  const [isSigningUp, setIsSigningUp] = useState(false);
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
      // show toast warning
      // please provide a valid email address and a password longer than 6 characters.
      console.log('password or email invalid');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            placeholder="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            {isSigningUp ? 'Register' : 'Login'}
          </button>
        </form>
        <p onClick={handleTabChange}>
          {isSigningUp
            ? 'Already registered? Login here.'
            : 'New user? Register here.'}
        </p>
      </div>
      {/* <h1>This is the Login page</h1>
      <h2>token: {token}</h2>
      <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};
