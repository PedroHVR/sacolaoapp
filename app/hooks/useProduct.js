import { useContext } from 'react';
import ProductContext from '../contexts/productContext';

const useProduct = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProduct needs a ProductContext.provider');
  }

  return {
    products: context.products,
    colors: context.colors,
    loadProducts: context.loadProducts,
  };
};

export default useProduct;
