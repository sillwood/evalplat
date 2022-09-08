import { useAuth } from '../hooks/useAuth';

export const Logout = () => {
  const { token, handleLogout } = useAuth();

  if (!token) return null;

  const handleClick = () => {
    handleLogout();
  };

  return <button onClick={handleClick}>Logout</button>;
};
