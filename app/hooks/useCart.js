import { useContext } from 'react';
import CartContext from '../contexts/cartContext';

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart needs a CartContext.provider');
  }

  return {
    cart: context.cart,
    reloadCart: context.reloadCart,
    addToCart: context.addToCart,
    removeFromCart: context.removeFromCart,
    getQuantityFromCart: context.getQuantityFromCart,
    removeAllFromCart: context.removeAllFromCart,
    orderCart: context.orderCart,
    isCartEmpty: context.isCartEmpty,
    isCategoryEmpty: context.isCategoryEmpty,
    loading: context.loading
  };
};

export default useCart;
