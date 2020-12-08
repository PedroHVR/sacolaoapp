import React from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import { FAB, List } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useAuth from '../../hooks/useAuth';

const themeAccordion =  {colors: {text: "#000", primary: "#000"}}

const Settings = () => {
  const { logout } = useAuth()

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
        <List.Subheader  theme={themeAccordion}>Minha conta</List.Subheader>
        <List.Item 
         theme={themeAccordion}
          title="Sair" 
          left={() => <List.Icon color="#000" icon="logout" />} 
          onPress={logout}
        />
      </List.Section>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings