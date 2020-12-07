import React from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  ButtonPrimary, Searchbar } from '../../components';

import styles from './styles';
import { Text, FAB } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useProduct from '../../hooks/useProduct';
import useCart from '../../hooks/useCart';

const Shopping = () => {
  const { products } = useProduct()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarDiv}>
        <FAB
          style={styles.FAB}
          color="#FFF"
          icon="arrow-left"
          onPress={() => Actions.replace('profile')}
        />
        <Searchbar category="categoria"/>
      </View>
      <ScrollView>
        {Object.keys(products).map((key, index) => {
          const value = products[key].name
          const items = products[key].products
          return (
            <View style={styles.shoppingView} key={index}>
              <ButtonPrimary 
              height={80} 
              mode="contained" 
              width="92%"
              onClick={
                () => Actions.push(
                  'productsByCategory', 
                  {
                    items: items,
                    value: value
                  }
                )
              }>
                <Text style={{fontWeight: 'bold'}}>{value}</Text>
              </ButtonPrimary>
            </View>
          )
        })}
      </ScrollView>
      <View style={{ margin: 16 }}>
        <ButtonPrimary mode="contained" onClick={() => Actions.replace('shoppingCart')}>
          <Text style={{fontWeight: 'bold'}}>Ver sacola</Text>
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  )
}

export default Shopping