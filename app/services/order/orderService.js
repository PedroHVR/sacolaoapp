import api from '../api';

const listOrders = async (userId) => {
  return api.get('/order/u/'+userId)
};

const updateOrderStatus = async (orderId, status, helper) => {
  return api.get(`/order/u/${orderId}/${status}/${helper}`)
};

const myHelpings = async (userId) => {
  return api.get(`/order/help/${userId}`)
}

const createOrder = async (data) => {
  return api.post('/order/create', data);
}

export default {
  listOrders,
  createOrder,
  updateOrderStatus,
  myHelpings,
};
