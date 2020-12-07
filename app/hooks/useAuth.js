import { useContext } from 'react';
import AuthContext from '../contexts/authContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth needs a AuthContext.provider');
  }

  return {
    login: context.login,
    register: context.register,
    logout: context.logout,
  };
};

export default useAuth;
