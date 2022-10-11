import { useAuth } from '../hooks/useAuth';

export const Logout = () => {
  const { user, handleLogout } = useAuth();

  if (!user) return null;

  const handleClick = () => {
    handleLogout();
  };

  return <button onClick={handleClick}>Logout</button>;
};
