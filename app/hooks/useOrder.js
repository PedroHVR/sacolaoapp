import { useContext } from 'react';
import OrderContext from '../contexts/orderContext';

const useOrder = () => {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error('useOrder needs a OrderContext.provider');
  }

  return {
    orders: context.orders,
    setOrders: context.setOrders,
    isCategoryEmpty: context.isCategoryEmpty,
    loadOrders: context.loadOrders,
    helpOrderUser: context.helpOrderUser,
    helpings: context.helpings,
    loadHelpings: context.loadHelpings,
    finishOrder: context.finishOrder,
    cancelOrder: context.cancelOrder,
    loading: context.loading
  };
};

export default useOrder;
