import React, { useEffect, useState } from 'react';
import ProductContext from '../contexts/productContext';
import services from '../services';

function co(lor){
  return (
    lor+=
    [1,2,3,4,5,6,7,8,9,'a','b','c','d','e']
    [Math.floor(Math.random()*14)]
  )
  && (lor.length == 6)?lor:co(lor);
}

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(false)
  const [colors, setColors] = useState()

  const loadProducts = async () => {
    setLoading(true)
    const product = await services.productService.product.listProducts()
    setLoading(false)
    setProducts(product.data)

    let colorsList = []
    for (let l in product.data) {
      colorsList.push('#'+co(''))
    }
    setColors(colorsList)
    setLoading(false)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loadProducts,
        colors,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
