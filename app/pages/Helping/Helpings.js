import React, { useState, useEffect, useCallback } from 'react'

import { View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import {  Accordion, ButtonPrimary } from '../../components';

import styles from './styles';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useOrder from '../../hooks/useOrder';

const Helpings = () => {
  const {
    helpings,
    loadHelpings
   } = useOrder()
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    if(!helpings) {
      loadHelpings()
    }
  }, [counter])

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadHelpings().then(() => setRefreshing(false));
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
        helpings && helpings.length === 0 &&
          <View style={styles.emptyView}>
            <Text style={{fontWeight: 'bold'}}>
              Ops, parece que você não ajudou ninguém ainda
            </Text>
            <ButtonPrimary mode="text" onClick={() => Actions.replace('orders')}>
              <Text 
                style={{fontWeight: 'bold'}} 
              >
                Que tal começar clicando aqui :D            
              </Text>
            </ButtonPrimary>
          </View>
      }
        <View style={styles.itemsView}>
          { helpings && Object.keys(helpings).map((index, key) => {
              const help = helpings[index]
              return (
                <View style={styles.shoppingView} key={key}>
                  <Accordion 
                    name={help.user.address}
                    userName={help.user.name} 
                    status={help.status} 
                    items={help.products}
                    orderId={help._id}
                    helper={help.helper}
                    type={2}
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

export default Helpings
