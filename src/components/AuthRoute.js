import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (!user && !isLoading) {
        return <Navigate to="/home" replace />;
    }

    return children;
};
