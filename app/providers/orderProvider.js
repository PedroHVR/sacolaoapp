import React, { useEffect, useState } from 'react';
import OrderContext from '../contexts/orderContext';
import services from '../services';
import useAuth from '../hooks/useAuth';
import useCart from '../hooks/useCart';

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState()
  const [helpings, setHelpings] = useState()
  const [loading, setLoading] = useState(false)
  const { user, profile } = useAuth()

  const loadOrders = async () => {
    setLoading(true)
    const response = await services.orderService.order.listOrders(profile === 1 ? user.idUser : '')
    setOrders(response.data)
    if(profile === 2) {
      await loadHelpings()
    }
    setLoading(false)
  }

  const loadHelpings = async () => {
    const response = await services.orderService.order.myHelpings(user.idUser)
    setHelpings(response.data)
  }

  const isCategoryEmpty = (orderId, category, type) => {
    if(type === 1){
      return orders.filter(
        order => order._id === orderId
      )[0].products[0][category].filter(
        val => val.quantity > 0
      ).length === 0
    } else {
      return helpings.filter(
        order => order._id === orderId
      )[0].products[0][category].filter(
        val => val.quantity > 0
      ).length === 0
    }
  }

  const helpOrderUser = async function(orderId) {
    setLoading(true)
    const response = await services.orderService.order.updateOrderStatus(orderId, 2, user.idUser)
    if(response.status === 200) {
      loadOrders()
    }
    setLoading(false)
  }

  const finishOrder = async function(orderId) {
    setLoading(true)
    const response = await services.orderService.order.updateOrderStatus(orderId, 3)
    if(response.status === 200) {
      loadOrders()
    }
    setLoading(false)
  }

  const cancelOrder = async function(orderId) {
    setLoading(true)
    const response = await services.orderService.order.updateOrderStatus(orderId, 0)
    if(response.status === 200) {
      loadOrders()
    }
    setLoading(false)
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        isCategoryEmpty,
        loadOrders,
        helpOrderUser,
        helpings,
        loadHelpings,
        finishOrder,
        cancelOrder,
        loading: loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
