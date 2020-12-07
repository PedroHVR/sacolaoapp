import { useContext } from 'react';
import OrderContext from '../contexts/orderContext';

const useOrder = () => {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error('useOrder needs a OrderContext.provider');
  }

  return {
    orders: context.orders,
    isCategoryEmpty: context.isCategoryEmpty,
    loadOrders: context.loadOrder,
    loading: context.loading
  };
};

export default useOrder;
