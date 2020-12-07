import api from '../api';

const listOrders = async (userId) => {
  return api.get('/order/'+userId)
};

const createOrder = async (data) => {
  return api.post('/order/create', data);
}

export default {
  listOrders,
  createOrder
};
