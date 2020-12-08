import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native';

import { Formik } from 'formik';
import { Actions } from 'react-native-router-flux';
import { Avatar, Text } from 'react-native-paper';

import { ButtonPrimary, TextInput, RadioButton } from '../../components';

import styles from './styles';
import schema from './schema';
import useAuth from '../../hooks/useAuth';

const Register = () => {

  const [radioButtonCheck, setRadioButtonCheck] = useState(0)
  const { register, loading } = useAuth()

  const onSubmit = async (data) => {
    if(data.passwordConfirm !== data.password) return false
    delete data.passwordConfirm;
    const response = await register(data);
    if (response.status === 201) {
      Actions.popTo('login');
    } else {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageDiv}>
          <Avatar.Icon size={100} icon="account" />
        </View>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: '',
            password: '',
            passwordConfirm: '',
            email: '',
            profile: 1,
            address: '',
          }}
          onSubmit={onSubmit}
        >
          {({handleChange, handleSubmit, setFieldValue, isValid, errors}) => {

            const submit = () => {
              if (!isValid) {
                console.log(errors)
              }
              handleSubmit();
            };

            return (
              <View style={styles.inputsDiv}>
                <TextInput
                  placeholder="Nome"
                  type="givenName"
                  keyboardType="email-address"
                  autoCapitalize="words"
                  onChange={handleChange('name')}
                />
                <TextInput
                  placeholder="E-mail"
                  type="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChange={handleChange('email')}
                />
                <TextInput
                  placeholder="Endereço"
                  type="fullStreetAddress"
                  onChange={handleChange('address')}
                />
                <TextInput
                  placeholder="Senha"
                  type="password"
                  secureTextEntry
                  onChange={handleChange('password')}
                />
                <TextInput
                  placeholder="Confirmar senha"
                  type="password"
                  secureTextEntry
                  onChange={handleChange('passwordConfirm')}
                />
                <Text style={styles.textProfile} theme={{colors: {text: "#000"}}}>
                  Qual é o seu perfil?
                </Text>
                <RadioButton
                  checked={radioButtonCheck === 0}
                  key={'user'}
                  onClick={() => {
                    setFieldValue('profile', 1)
                    setRadioButtonCheck(0)
                  }}
                  label="Sou usuário"
                />
                <RadioButton
                  checked={radioButtonCheck === 1}
                  key={'voluntary'}
                  onClick={() => {
                    setFieldValue('profile', 2)
                    setRadioButtonCheck(1)
                  }}
                  label="Sou voluntário"
                />
                <ButtonPrimary
                  mode="contained"
                  onClick={submit}
                  loading={loading}
                >
                  <Text>Registrar</Text>
                </ButtonPrimary>
                <View style={styles.backButton}>
                  <ButtonPrimary
                    onClick={() => Actions.popTo('login')}
                  >
                    Voltar
                  </ButtonPrimary>
                </View>
              </View>
            )
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register