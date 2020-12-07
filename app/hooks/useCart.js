import { useContext } from 'react';
import CartContext from '../contexts/cartContext';

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart needs a CartContext.provider');
  }

  return {
    cart: context.cart,
    addToCart: context.addToCart,
    removeFromCart: context.removeFromCart,
    getQuantityFromCart: context.getQuantityFromCart,
    removeAllFromCart: context.removeAllFromCart,
    loading: context.loading
  };
};

export default useCart;
