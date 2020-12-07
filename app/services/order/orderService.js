import api from '../api';

const listOrders = async () => {
  return api.get('/order/')
};

const createOrder = async (data) => {
  return api.post('/order/create', data);
}

export default {
  listOrders,
  createOrder
};
