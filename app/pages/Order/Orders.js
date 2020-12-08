import React, { useState, useEffect, useCallback } from 'react'

import { View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import {  Accordion, ButtonPrimary } from '../../components';

import styles from './styles';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useOrder from '../../hooks/useOrder';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
  const {
    orders,
    loadOrders,
   } = useOrder()

  const {profile} = useAuth()
  const [refreshing, setRefreshing] = useState(false);

  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    if(orders === true) {
      loadOrders()
    }
  }, [counter])

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadOrders().then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {
          orders && orders.length === 0 &&
            <View style={styles.emptyView}>
              <Text style={{fontWeight: 'bold'}}>
                {profile === 1
                  ? 'Você ainda não fez compras' 
                  : 'Não há ninguém precisando de ajuda hoje'
                }
              </Text>
              {profile === 1
                ? <ButtonPrimary mode="text" onClick={() => Actions.replace('shopping')}>
                    <Text 
                      style={{fontWeight: 'bold'}} 
                    >
                      Que tal começar clicando aqui :D            
                    </Text>
                  </ButtonPrimary>
                : 
                <Text style={{fontWeight: 'bold'}}>Obrigado por ajudar :)</Text>
              }        
            </View>
        }
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
                    helper={order.helper}
                    type={1}
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
