import React from 'react';
import { Button as ButtonPaper, withTheme } from 'react-native-paper';
import styles from './styles';

const ButtonPrimary = ({ children, height, width, onClick, ...rest }) => (
  <ButtonPaper
    {...rest}
    style={{height: height, width: width, ...styles.buttonPrimary}}
    onPress={onClick}
  >
    {children}
  </ButtonPaper>
);

export default ButtonPrimary;
