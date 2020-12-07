import React, { useState } from 'react';
import AuthContext from '../contexts/authContext';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import service from '../services';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [emailLogin, setEmailLogin] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }) => {
    setEmailLogin(email);
    setLoading(true);

    try {
      const response = await service.userService.user.login({ email, password });
      setLoading(false);
      if (response && response.status === 201) {
        setUser(response.data.response.data);
        await AsyncStorage.setItem('userToken', response.data.response.token);
        setAuthenticated(true);
        setProfile(response.data.response.data.profile)
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const register = async (data) => {
    setLoading(true);
    const response = await service.userService.user.register(data);
    setLoading(false);
    return response;
  };

  const logout = async () => {
    Actions.pop();
    setUser(undefined);
    setAuthenticated(false);
    await AsyncStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        user,
        emailLogin,
        authenticated,
        profile,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
