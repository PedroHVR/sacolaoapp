import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native';

import { Formik } from 'formik';
import { Actions } from 'react-native-router-flux';
import { Avatar, Text } from 'react-native-paper';

import { ButtonPrimary, TextInput, RadioButton } from '../../components';

import styles from './styles';
import schema from './schema';

const Register = () => {

  const [radioButtonCheck, setRadioButtonCheck] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageDiv}>
          <Avatar.Icon size={100} icon="account" />
        </View>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: '',
            pass: '',
            passConfirm: '',
            email: '',
            profileId: '',
            address: '',
          }}
          // onSubmit={onSubmit}
        >
          {({handleChange, handleSubmit, setFieldValue}) => (
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
                onChange={handleChange('pass')}
              />
              <TextInput
                placeholder="Confirmar senha"
                type="password"
                secureTextEntry
                onChange={handleChange('passConfirm')}
              />
              <Text style={styles.textProfile} theme={{colors: {text: "#000"}}}>
                Qual é o seu perfil?
              </Text>
              <RadioButton
                checked={radioButtonCheck === 0}
                key={'user'}
                onClick={() => {
                  setFieldValue('profileId', 1)
                  setRadioButtonCheck(0)
                }}
                label="Sou usuário"
              />
              <RadioButton
                checked={radioButtonCheck === 1}
                key={'voluntary'}
                onClick={() => {
                  setFieldValue('profileId', 2)
                  setRadioButtonCheck(1)
                }}
                label="Sou voluntário"
              />
              <ButtonPrimary
                mode="contained"
                onClick={handleSubmit}
              >
                <Text>Registrar</Text>
              </ButtonPrimary>
            </View>
          )}
      </Formik>
      </View>
      <View>
        <ButtonPrimary
          onClick={() => Actions.popTo('login')}
        >
          Voltar
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  )
}

export default Register