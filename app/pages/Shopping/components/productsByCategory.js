import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { ButtonPrimary, Searchbar } from '../../../components';
import styles from '../styles';

const ProductsByCategory = ({ items, value, ...props }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarDiv}>
        <FAB
          style={styles.FAB}
          color="#FFF"
          icon="arrow-left"
          onPress={() => Actions.replace('shopping')}
        />
      <Searchbar category={value.toLowerCase()}/>
      </View>
      <ScrollView>
        <Text style={{fontWeight: 'bold'}}>Oi</Text>
        {items && value && Object.keys(items).map((key) => {
          const item = items[key]
          return (
            <View style={styles.shoppingView} key={key}>
              <ButtonPrimary height={50} width="5%" mode="contained">
                <Text style={{fontWeight: 'bold'}}>-</Text>
              </ButtonPrimary>
              <View style={styles.viewProduct}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              </View>
              <ButtonPrimary height={50} width="5%" mode="contained">
                <Text style={{fontWeight: 'bold'}}>+</Text>
              </ButtonPrimary>
              <View style={styles.viewUnities}>
                <Text>10 UN</Text>
              </View>
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

export default ProductsByCategory