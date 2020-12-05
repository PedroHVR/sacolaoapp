import React from 'react';
import { Button as ButtonPaper, withTheme } from 'react-native-paper';
import styles from './styles';

const ButtonPrimary = ({ children, onClick, ...rest }) => (
  <ButtonPaper
    {...rest}
    style={styles.button_priamry}
    onPress={onClick}
  >
    {children}
  </ButtonPaper>
);

export default ButtonPrimary;
