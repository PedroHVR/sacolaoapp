import React, { useState } from 'react';
import CartContext from '../contexts/cartContext';

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState({
    "Alimentos": [
      {id: 1, quantity: 0, name: "Alface"},
      {id: 2, quantity: 0, name: "Tomate"},
      {id: 3, quantity: 0, name: "Feijão"},
      {id: 4, quantity: 0, name: "Arroz"},
      {id: 5, quantity: 0, name: "Batata"},
      {id: 6, quantity: 0, name: "Molho de tomate"},
      {id: 7, quantity: 0, name: "Açucar"},
    ],
    "Limpeza": [
      {id: 1, quantity: 0, name: "Sabão em pó"},
      {id: 2, quantity: 0, name: "Desinfetante"},
      {id: 3, quantity: 0, name: "Amaciante"},
      {id: 4, quantity: 0, name: "Lustra móveis"},
    ],
    "Utensílios": [
      {id: 1, quantity: 0, name: "Vassoura"},
      {id: 2, quantity: 0, name: "Martelo"},
    ],
  })

  const addToCart = (category, id) => {
    const cartItems = cart
    const itemsPerCategory = cart[category]
    const toAdd = itemsPerCategory.filter(item => item.id !== id)
    const toModify = itemsPerCategory.filter(item => item.id === id)[0]
    const quantity = toModify.quantity
    toModify.quantity = quantity+1
    toAdd.push(toModify)
    cartItems[category] = toAdd
    setCart(cartItems)
  };

  const removeFromCart = (category, id) => {
    const cartItems = cart
    const itemsPerCategory = cart[category]
    const toAdd = itemsPerCategory.filter(item => item.id !== id)
    const toModify = itemsPerCategory.filter(item => item.id === id)[0]
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
    const toAdd = itemsPerCategory.filter(item => item.id !== id)
    const toModify = itemsPerCategory.filter(item => item.id === id)[0]
    toModify.quantity = 0
    toAdd.push(toModify)
    cartItems[category] = toAdd
    setCart(cartItems)
  }

  const getQuantityFromCart = (category, id) => {
    const itemsPerCategory = cart[category]
    const toModify = itemsPerCategory.filter(item => item.id === id)[0]
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
