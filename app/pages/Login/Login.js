import React, { useState } from 'react'

import { View, SafeAreaView } from 'react-native';
import { Formik, useFormik } from 'formik'
import {  ButtonPrimary, TextInput } from '../../components';

import styles from './styles';
import schema from './schema';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { login, loading, emailLogin } = useAuth()

  const doLogin = async (data) => {
    await login({ email: data.email, password: data.password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginView}>
        <Formik 
          validationSchema={schema}
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (data) => doLogin(data)}
        >
          {({handleChange, handleBlur, handleSubmit, isValid, values }) => {
            const submit = () => {
              handleSubmit();
              if (!isValid) {
              }
            };

            return (
              <View style={styles.inputsDiv}>
                <TextInput 
                  placeholder="E-mail"
                  type="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={emailLogin || values.email}
                  onChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                />
                <TextInput 
                  placeholder="Senha"
                  type="password"
                  keyboardType="default"
                  autoCapitalize="none"
                  value={values.password}
                  onChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  secureTextEntry
                />
                <ButtonPrimary
                  mode="contained"
                  onClick={submit}
                  loading={loading}
                >
                  <Text>Entrar</Text>
                </ButtonPrimary>
              </View>
            )
          }}
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
