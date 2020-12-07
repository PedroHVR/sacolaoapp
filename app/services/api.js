import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const localURL = 'http://192.168.1.107:4000/';
const api = axios.create({
  baseURL: process.env.URL || localURL,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let message = '';
    switch (error.response.status) {
      case 401:
        message = 'Você não tem permissão para realizar essa ação';
        break;
      case 404:
        message = 'O que procurava não foi encontrado.';
        break;
      case 406:
        message = 'Os campos preenchidos não são suficientes';
        break;
      case 500:
        switch (error.response.data.error.name) {
          case 'SequelizeUniqueConstraintError':
            message = 'Esse email já está sendo utilizado, escolha outro';
            break;
          default:
            message = 'Ocorreu um erro interno, tente novamente';
            break;
        }
        break;
      default:
        message = 'Erro desconhecido, reinicie a aplicação e tente novamente';
        break;
    }
    return message;
  }
);

export default api;
