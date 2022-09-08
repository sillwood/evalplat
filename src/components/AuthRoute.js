import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  // todo: persist jwt check?

  if (!token) {
    return <Navigate to="/home" replace />;
  }

  return children;
};
