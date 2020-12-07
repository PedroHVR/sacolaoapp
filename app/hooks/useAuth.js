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
    user: context.user,
    emailLogin: context.emailLogin,
    authenticated: context.authenticated,
    profile: context.profile,
    loading: context.loading,
  };
};

export default useAuth;
