import React from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  ButtonPrimary, Searchbar } from '../../components';

import styles from './styles';
import { Text, FAB, Portal, Provider, Modal, withTheme } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import ProductsByCategory from './components/productsByCategory';

const Shopping = ({ theme }) => {
  const items = {
    "Alimentos": [
      {id: 1, name: "Alface"},
      {id: 2, name: "Tomate"},
      {id: 3, name: "Feijão"},
      {id: 4, name: "Arroz"},
      {id: 5, name: "Batata"},
      {id: 6, name: "Molho de tomate"},
      {id: 7, name: "Açucar"},
    ],
    "Limpeza": [
      {id: 1, name: "Sabão em pó"},
      {id: 2, name: "Desinfetante"},
      {id: 3, name: "Amaciante"},
      {id: 4, name: "Lustra móveis"},
    ],
    "Utensílios": [
      {id: 1, name: "Vassoura"},
      {id: 1, name: "Martelo"},
    ],
    "Teste": [

    ],
    "Teste 2": [

    ],
    "Teste 3": [

    ],
    "Teste 4": [

    ],
    "Teste 5": [

    ],
    "Teste 6": [

    ],
  }

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
        {Object.keys(items).map((value, index) => {
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
                    items: items[value],
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

export default withTheme(Shopping)