import api from '../api';

const login = async ({ email, password }) => {
  return api.post('/user/login', {
    email,
    password,
  });
};

const register = async (data) => {
  return api.post('/user/create-user', data);
};

export default {
  login,
  register,
};
