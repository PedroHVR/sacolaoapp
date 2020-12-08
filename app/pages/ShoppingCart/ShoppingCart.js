import React, { useState, useEffect } from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  ButtonPrimary } from '../../components';

import styles from './styles';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useCart from '../../hooks/useCart';
import useOrder from '../../hooks/useOrder';
import useProduct from '../../hooks/useProduct';

const ShoppingCart = () => {
  const {
    cart,
    removeAllFromCart,
    orderCart,
    loading,
    isCartEmpty,
    isCategoryEmpty,
   } = useCart()

   const {
     loadOrders
   } = useOrder()

  const { colors } = useProduct()
  
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
  }, [counter])

  return (
    <SafeAreaView style={styles.container}>
      {isCartEmpty() && 
        <View style={styles.emptyView}>
          <Text style={{fontWeight: 'bold'}}>
            Sua sacola está vazia                
          </Text>
        </View>
      }
      <ScrollView>
        <View style={styles.itemsView}>
          { cart && !isCartEmpty() && Object.keys(cart).map((value, index) =>
            (
              <View key={index}>
                {!isCategoryEmpty(value) &&
                  <View style={{backgroundColor: colors[index], ...styles.viewUnities}} key={`${value}${index}`}>
                    <Text>{value}</Text>
                  </View>
                }
                {
                  Object.keys(cart[value]).map((key) => {
                    const item = cart[value][key]
                    return (
                      item.quantity > 0 && 
                        <View style={styles.shoppingView} key={key}>
                          <View style={styles.viewProduct}>
                            <Text style={{fontWeight: 'bold'}}>
                              {`${item.quantity} unidade${item.quantity > 1 
                                ? 's'
                                : ''} de ${item.name.toLowerCase()}`}
                            </Text>
                          </View>
                          <ButtonPrimary 
                            mode="contained"
                            onClick={() =>{
                              removeAllFromCart(value, item._id)
                              setCounter(counter+1)
                            }}
                          >
                            <Text style={{fontWeight: 'bold'}}>X</Text>
                          </ButtonPrimary>
                        </View>
                    )
                  })
                }
              </View>
            )
          )}
        </View>
      </ScrollView>
      <View 
        style={styles.viewActions}
      >
        <ButtonPrimary 
          mode="contained"
          loading={loading}
          disabled={loading || isCartEmpty()}
          onClick={async () => {
            await orderCart()
            await loadOrders()
          }}
        >
          <Text style={{fontWeight: 'bold'}}>
            Fechar sacola
          </Text>
        </ButtonPrimary>
        <ButtonPrimary mode="text" onClick={() => Actions.replace('shopping')}>
          <Text style={{fontWeight: 'bold'}} theme={{colors: {text: "#000"}}}>
            Voltar as compras
          </Text>
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  )
}

export default ShoppingCart
