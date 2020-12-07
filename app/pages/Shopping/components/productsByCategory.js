import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { ButtonPrimary, Searchbar } from '../../../components';
import useCart from '../../../hooks/useCart';
import styles from '../styles';

const ProductsByCategory = ({ items, value, ...props }) => {
  const cart = useCart()
  const [quantities, setQuantities] = useState(cart.cart)
  const [counter, setCounter] = useState(0)
  useEffect(()=> {
    const mountQuantities = () => {
      setQuantities(cart.cart)
    }

    mountQuantities
  }, [counter])

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
              <ButtonPrimary 
                height={50} 
                width="5%" 
                mode="contained"
                onClick={() => {
                  cart.removeFromCart(value, item._id)
                  setCounter(counter-1)
                }}
              >
                <Text style={{fontWeight: 'bold'}}>-</Text>
              </ButtonPrimary>
              <View style={styles.viewProduct}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              </View>
              <ButtonPrimary
                height={50} 
                width="5%" 
                mode="contained"
                onClick={() =>{
                  cart.addToCart(value, item._id)
                  setCounter(counter+1)
                }}
              >
                <Text style={{fontWeight: 'bold'}}>+</Text>
              </ButtonPrimary>
              <View style={styles.viewUnities}>
                <Text>
                  {cart.getQuantityFromCart(value, item._id)}
                </Text>
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