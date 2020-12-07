import React, { useState, useEffect } from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  Accordion, ButtonPrimary } from '../../components';

import styles from './styles';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useOrder from '../../hooks/useOrder';

const Orders = () => {
  const {
    orders,
    loadOrders,
   } = useOrder()
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    if(orders === true) {
      loadOrders()
    }
  }, [counter])

//   {!isCategoryEmpty(value) &&
//     <View style={styles.viewUnities} key={`${value}${index}`}>
//       <Text>{value}</Text>
//     </View>
//   }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemsView}>
          { orders && orders !== true && Object.keys(orders).map((index, key) => {
              const order = orders[index]
              return (
                <View style={styles.shoppingView} key={key}>
                  <Accordion 
                    name={order.user.address} 
                    status={order.status} 
                    items={order.products}
                    orderId={order._id}
                  />
                </View>
              )
            }
          )}
        </View>
      </ScrollView>
      <View 
        style={styles.viewActions}
      >
        <ButtonPrimary mode="contained" onClick={() => Actions.replace('profile')}>
          <Text style={{fontWeight: 'bold'}}>
            Voltar
          </Text>
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  )
}

export default Orders
