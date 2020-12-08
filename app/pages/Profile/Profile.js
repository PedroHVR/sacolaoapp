import React, { useEffect } from 'react'

import { View, SafeAreaView } from 'react-native';
import {  ButtonPrimary } from '../../components';

import styles from './styles';
import { Avatar, FAB, Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useOrder from '../../hooks/useOrder';
import useProduct from '../../hooks/useProduct';

const Profile = () => {
  const { user, profile, logout, authenticated } = useAuth()
  const { loading } = useCart()
  const { loading: loadingOrder, loadOrders, orders } = useOrder()
  const { loadProducts, products } = useProduct()

  if(!user) {
    logout()
  }

  useEffect(() => {
    if(!orders){
      loadOrders()
    }
    if(!products){
      loadProducts()
    }
  }, [authenticated])

  return (
    <SafeAreaView style={styles.container}>
      <FAB
        small
        icon="cog" 
        color="#FFF" 
        style={styles.fab}
        onPress={() => Actions.replace("settings")}
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
            <ButtonPrimary
              onClick={() => Actions.replace('orders')}
              loading={loading || loadingOrder}
              disabled={loading || loadingOrder}
            >
              <Text theme={{colors: {text: "#000"}}}>Minhas compras</Text>
            </ButtonPrimary>
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
            <ButtonPrimary
              onClick={() => Actions.replace('helpings')}
              loading={loading || loadingOrder}
              disabled={loading || loadingOrder}
            >
              <Text theme={{colors: {text: "#000"}}}>Minhas ajudas</Text>
            </ButtonPrimary>
          </View>
        }
      </View>
    </SafeAreaView>
  )
}

export default Profile