import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/home" replace />;
    }

    return children;
};
