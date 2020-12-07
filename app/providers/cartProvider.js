import React, { useEffect, useState } from 'react';
import CartContext from '../contexts/cartContext';
import useProduct from '../hooks/useProduct';

const CartProvider = ({ children }) => {
  const { products, loadProducts } = useProduct()
  const [ loading, setLoading ] = useState(true)
  const [cart, setCart] = useState()

  useEffect(() => {
    const loadCart = async () => {
      await loadProducts()

      const toCart = {}
      products && products.map(productMap => {
        toCart[productMap.name] = productMap.products.map((product) => {
          product["quantity"] = 0;
          return product
        })
        setCart(toCart)
      })
      setLoading(false)
    }
    loadCart()
  }, [loading])

  const addToCart = (category, id) => {
    const cartItems = cart
    const itemsPerCategory = cart[category]
    const toAdd = itemsPerCategory.filter(item => item._id !== id)
    const toModify = itemsPerCategory.filter(item => item._id === id)[0]
    const quantity = toModify.quantity
    toModify.quantity = quantity+1
    toAdd.push(toModify)
    cartItems[category] = toAdd
    setCart(cartItems)
  };

  const removeFromCart = (category, id) => {
    const cartItems = cart
    const itemsPerCategory = cart[category]
    const toAdd = itemsPerCategory.filter(item => item._id !== id)
    const toModify = itemsPerCategory.filter(item => item._id === id)[0]
    const quantity = toModify.quantity
    if(quantity > 0) {
      toModify.quantity = quantity-1
      toAdd.push(toModify)
      cartItems[category] = toAdd
      setCart(cartItems)
    }
  };

  const removeAllFromCart = (category, id) => {
    const cartItems = cart
    const itemsPerCategory = cart[category]
    const toAdd = itemsPerCategory.filter(item => item._id !== id)
    const toModify = itemsPerCategory.filter(item => item._id === id)[0]
    toModify.quantity = 0
    toAdd.push(toModify)
    cartItems[category] = toAdd
    setCart(cartItems)
  }

  const getQuantityFromCart = (category, id) => {
    const itemsPerCategory = cart[category]
    const toModify = itemsPerCategory.filter(item => item._id === id)[0]
    return toModify.quantity
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getQuantityFromCart,
        removeAllFromCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
