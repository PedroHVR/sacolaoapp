import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton as RadioButtonPaper, withTheme } from 'react-native-paper';
import styles from './styles';

const RadioButton = ({
  checked,
  onClick,
  value,
  label,
  disabled,
  color,
  theme,
}) => {
  return (
    <View style={styles.RadioButtonView}>
      <RadioButtonPaper
        value={value}
        color="#000"
        status={checked && 'checked'}
        onPress={onClick}
        disabled={disabled}
      />
      <Text style={{ color: color || theme.colors.black }} onPress={onClick}>
        {label}
      </Text>
    </View>
  );
};

export default withTheme(RadioButton);
