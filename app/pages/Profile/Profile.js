import React from 'react'

import { View, SafeAreaView } from 'react-native';
import {  ButtonPrimary, TextInput } from '../../components';

import styles from './styles';
import { Avatar, Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useOrder from '../../hooks/useOrder';

const Profile = () => {
  const { user, profile, logout } = useAuth()
  const { loading } = useCart()
  const { orders, helpings, loading: loadingOrder } = useOrder()
  if(!user) {
    logout()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Icon 
        size={24} 
        icon="cog" 
        color="#FFF" 
        style={{alignSelf: 'flex-end', marginTop: '8%'}}
      />
      <View style={styles.profileView}>
        <View style={styles.imageDiv}>
          <Avatar.Icon size={100} icon="account" color="#FFF"/>
          <Text theme={{colors: {text: '#000'}}}>{user.name.toUpperCase()}</Text>
          <Text theme={{colors: {text: '#000'}}}>EMAIL: {user.email}</Text>
        </View>
        {profile && profile === 1 ? 
          <View style={styles.viewActions}>
            <ButtonPrimary
              mode="contained" 
              onClick={() => Actions.replace('shopping')}
              loading={loading || loadingOrder}
              disabled={loading || loadingOrder}
            >
              <Text>Fazer compras</Text>
            </ButtonPrimary>
            {orders && orders !== true &&<ButtonPrimary
              onClick={() => Actions.replace('orders')}
            >
              <Text theme={{colors: {text: "#000"}}}>Minhas compras</Text>
            </ButtonPrimary>}
          </View>
          :
          <View style={styles.viewActions}>
            <ButtonPrimary
              mode="contained" 
              onClick={() => Actions.replace('orders')}
              loading={loading || loadingOrder}
              disabled={loading || loadingOrder}
            >
              <Text>Ajudar</Text>
            </ButtonPrimary>
            {helpings &&<ButtonPrimary
              onClick={() => Actions.replace('helpings')}
            >
              <Text theme={{colors: {text: "#000"}}}>Minhas ajudas</Text>
            </ButtonPrimary>}
          </View>
        }
      </View>
    </SafeAreaView>
  )
}

export default Profile