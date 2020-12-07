import React, { useEffect, useState } from 'react';
import OrderContext from '../contexts/orderContext';
import services from '../services';
import useAuth from '../hooks/useAuth';
import useCart from '../hooks/useCart';

const OrderProvider = ({ children }) => {
  const { loading: LoadingCart } = useCart()
  const [orders, setOrders] = useState(true)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  const loadOrders = async () => {
    if(loading && orders){
      setLoading(false)
      const response = await services.orderService.order.listOrders({ userId: user.IdUser })
      setOrders(response.data)
    }
  }

  useEffect(() => {
    if(user){
      loadOrders()
    }
  }, [loading, user, LoadingCart])
  
  const isCategoryEmpty = (orderId, category) => {
    return orders.filter(
      order => order._id === orderId
    )[0].products[0][category].filter(
      val => val.quantity > 0
    ).length === 0
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        isCategoryEmpty,
        loadOrders,
        loading: loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
