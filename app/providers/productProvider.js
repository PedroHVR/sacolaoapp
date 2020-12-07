import React, { useEffect, useState } from 'react';
import ProductContext from '../contexts/productContext';
import services from '../services';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)

  const loadProducts = async () => {
    if(loading) {
      const product = await services.productService.product.listProducts()
      setLoading(false)
      setProducts(product.data)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [loading])

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
