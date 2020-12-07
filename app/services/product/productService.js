import api from '../api';

const listProducts = async () => {
  return api.get('/product/')
};

export default {
  listProducts,
};
