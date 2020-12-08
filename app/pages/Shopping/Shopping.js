import React, { useEffect, useState } from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  ButtonPrimary, Searchbar } from '../../components';

import styles from './styles';
import { Text, FAB } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useProduct from '../../hooks/useProduct';

const Shopping = () => {
  const { products, colors } = useProduct()
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  const [itemsFilter, setItems] = useState(products)

  useEffect(() => {
    if(itemsFilter){
      setItems(products.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())))
    }
  }, [searchQuery])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarDiv}>
        <FAB
          style={styles.FAB}
          color="#FFF"
          icon="arrow-left"
          onPress={() => Actions.replace('profile')}
        />
        <Searchbar 
          onChangeSearch={onChangeSearch} 
          searchQuery={searchQuery} 
          category="categoria"
        />
      </View>
      <ScrollView>
        {Object.keys(itemsFilter).map((key, index) => {
          const value = itemsFilter[key].name
          const items = itemsFilter[key].products
          const color = colors[index]
          return (
            <View style={styles.shoppingView} key={index}>
              <ButtonPrimary
                height={80} 
                mode="contained" 
                width="92%"
                color={color}
                onClick={
                  () => Actions.push(
                    'productsByCategory', 
                    {
                      items: items,
                      value: value,
                      color: color
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