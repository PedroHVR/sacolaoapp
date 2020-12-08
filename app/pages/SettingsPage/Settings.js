import React from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import { FAB, List } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import useProduct from '../../hooks/useProduct';

const themeAccordion =  {colors: {text: "#000", primary: "#000"}}

const Settings = () => {
  const { logout } = useAuth()
  const { setOrders } = useOrder()
  const { setProducts } = useProduct()

  const logoff = () => {
    setOrders(false)
    setProducts(false)
    logout()
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
      </View>
      <ScrollView>
      <List.Section theme={themeAccordion} style={{width: "100%"}}>
        <List.Subheader 
          style={{fontWeight: 'bold'}} 
          theme={themeAccordion}
          >
            Minha conta
          </List.Subheader>
        <List.Item 
         theme={themeAccordion}
          title="Sair" 
          left={() => <List.Icon color="#000" icon="logout" />} 
          onPress={logoff}
          style={{marginTop: -20}}
        />
      </List.Section>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings