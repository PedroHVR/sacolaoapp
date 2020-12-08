import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { ButtonPrimary, Searchbar } from '../../../components';
import useCart from '../../../hooks/useCart';
import styles from '../styles';

const ProductsByCategory = ({ items, value, color, ...props }) => {
  const cart = useCart()
  const [counter, setCounter] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  const [itemsFilter, setItems] = useState(items)

  useEffect(()=> {
    if(itemsFilter){
      setItems(items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())))
    }
  }, [counter, searchQuery])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarDiv}>
        <FAB
          style={styles.FAB}
          color="#FFF"
          icon="arrow-left"
          onPress={() => Actions.replace('shopping')}
        />
      <Searchbar
        onChangeSearch={onChangeSearch} 
        searchQuery={searchQuery} 
        category={value.toLowerCase()}
      />
      </View>
      <ScrollView>
        {itemsFilter && value && Object.keys(itemsFilter).map((key) => {
          const item = itemsFilter[key]
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
                color={color}
              >
                <Text style={{fontWeight: 'bold'}}>-</Text>
              </ButtonPrimary>
              <View style={{backgroundColor: color, ...styles.viewProduct}}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              </View>
              <ButtonPrimary
                height={50}
                color={color}
                width="5%" 
                mode="contained"
                onClick={() =>{
                  cart.addToCart(value, item._id)
                  setCounter(counter+1)
                }}
              >
                <Text style={{fontWeight: 'bold'}}>+</Text>
              </ButtonPrimary>
              <View style={{backgroundColor: color, ...styles.viewUnities}}>
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