import React, { useState, useEffect } from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
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

//   {!isCategoryEmpty(value) &&
//     <View style={styles.viewUnities} key={`${value}${index}`}>
//       <Text>{value}</Text>
//     </View>
//   }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
