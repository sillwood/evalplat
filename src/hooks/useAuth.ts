import { useContext } from 'react';
import { AuthContextType } from '../types';
import { AuthContext } from '../utils/authProvider';

export const useAuth = () => {
    return (useContext(AuthContext) as unknown) as AuthContextType;
};
