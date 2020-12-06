import React from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  ButtonPrimary, Searchbar } from '../../components';

import styles from './styles';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

const ShoppingCart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
      </ScrollView>
      <View 
        style={styles.viewActions}
      >
        <ButtonPrimary mode="contained" >
          <Text style={{fontWeight: 'bold'}}>Fechar sacola</Text>
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
