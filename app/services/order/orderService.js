import api from '../api';

const listOrders = async (data) => {
  return api.get('/order/', { data: data })
};

const createOrder = async (data) => {
  return api.post('/order/create', data);
}

export default {
  listOrders,
  createOrder
};
