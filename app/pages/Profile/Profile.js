import React from 'react'

import { View, SafeAreaView } from 'react-native';
import {  ButtonPrimary, TextInput } from '../../components';

import styles from './styles';
import { Avatar, Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Icon size={24} icon="cog" color="#FFF" style={{alignSelf: 'flex-end', marginTop: '8%'}}/>  
      <View style={styles.profileView}>
        <View style={styles.imageDiv}>
          <Avatar.Icon size={100} icon="account" color="#FFF"/>
          <Text theme={{colors: {text: '#000'}}}>LUIZ FERNANDO</Text>
          <Text theme={{colors: {text: '#000'}}}>EMAIL: email@email.com</Text>
        </View>
        <View>
          <ButtonPrimary mode="contained" onClick={() => Actions.replace('shopping')}>
            <Text>Fazer compras</Text>
          </ButtonPrimary>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile