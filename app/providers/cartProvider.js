import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import CartContext from '../contexts/cartContext';
import useProduct from '../hooks/useProduct';
import services from '../services';
import useAuth from '../hooks/useAuth';

const CartProvider = ({ children }) => {
  const { products, loadProducts } = useProduct()
  const [ loadingCart, setLoadingCart ] = useState(true)
  const [ loading, setLoading ] = useState(false)
  const [cart, setCart] = useState()
  const { user } = useAuth()

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
      setLoadingCart(false)
    }
    loadCart()
  }, [loadingCart])

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

  const isCategoryEmpty = (category) => {
    return cart[category].filter(val => val.quantity > 0).length === 0
  }

  const isCartEmpty = () => {
    const items = []
    for(let key in cart) {
      items.push(cart[key].filter(val => val.quantity > 0))
    }
    return items.flat().length === 0
  }

  const orderCart = async () => {
    if(!isCartEmpty()){
      setLoading(true)
      try {
        const response = await services.orderService.order.createOrder({userId: user.idUser, products: cart})
        setLoading(false);
        if (response && response.status === 201) {
          Actions.push('profile')
        } else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getQuantityFromCart,
        removeAllFromCart,
        orderCart,
        isCartEmpty,
        isCategoryEmpty,
        loading: loading || loadingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
