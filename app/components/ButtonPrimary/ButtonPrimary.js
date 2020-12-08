import React from 'react';
import { Button as ButtonPaper } from 'react-native-paper';
import styles from './styles';

const ButtonPrimary = ({ children, height, width, onClick, color, ...rest }) => (
  <ButtonPaper
    {...rest}
    style={{height: height, width: width, [color && "backgroundColor"]: color, ...styles.buttonPrimary}}
    onPress={onClick}
  >
    {children}
  </ButtonPaper>
);

export default ButtonPrimary;
