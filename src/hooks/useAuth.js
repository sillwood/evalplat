import { useContext } from 'react';
import { AuthContext } from '../utils/authProvider';

export const useAuth = () => {
  return useContext(AuthContext);
};
