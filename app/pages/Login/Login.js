import React from 'react'

import { View, SafeAreaView } from 'react-native';
import { Formik } from 'formik'
import {  ButtonPrimary, TextInput } from '../../components';

import styles from './styles';
import schema from './schema';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginView}>
        <Formik 
          validationSchema={schema}
          initialValues={{
            email: '',
            pass: ''
          }}
        >
          {({handleChange, handleBlur, handleSubmit}) => (
            <View style={styles.inputsDiv}>
              <TextInput 
                placeholder="E-mail"
                type="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChange={handleChange('email')}
                handleBlur={handleBlur('email')}
              />
              <TextInput 
                placeholder="Senha"
                type="password"
                keyboardType="default"
                autoCapitalize="none"
                onChange={handleChange('pass')}
                handleBlur={handleBlur('pass')}
              />
              <ButtonPrimary
                mode="contained"
                onClick={handleSubmit}
              >
                <Text>Entrar</Text>
              </ButtonPrimary>
            </View>
          )}
        </Formik>
        <View>
          <ButtonPrimary
            onClick={() => Actions.push('register')}
          >
            Criar um conta
          </ButtonPrimary>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login