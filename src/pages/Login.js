import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const { token, handleLogin } = useAuth();

  return (
    <div>
      <h1>This is the Login page</h1>
      <h2>token: {token}</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
