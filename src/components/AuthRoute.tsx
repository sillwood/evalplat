import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
    children?: ReactNode;
}

export const AuthRoute = ({ children }: Props) => {
    const { user, isLoading } = useAuth();

    if (!user && !isLoading) {
        return <Navigate to="/home" replace />;
    }

    return children;
};
