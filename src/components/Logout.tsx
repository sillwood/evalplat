import { useAuth } from '../hooks/useAuth';

export const Logout = () => {
    const { user, handleLogout } = useAuth();

    if (!user) return null;

    const handleClick = (): void => {
        handleLogout();
    };

    return <button onClick={handleClick}>Logout</button>;
};
