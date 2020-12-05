import React from 'react';
import { Caption, TextInput as TextInputPaper } from 'react-native-paper';
import styles from './styles';

const TextInput = ({
  placeholder,
  type,
  keyboardType = 'default',
  secureTextEntry,
  autoCapitalize,
  error,
  maxLength = 255,
  value = null,
  onChange = () => {},
  handleBlur = () => {},
  helperText = false,
}) => (
  <>
    <TextInputPaper
      label={placeholder}
      mode="flat"
      style={styles.input_text}
      placeholder={placeholder}
      textContentType={type}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      maxLength={maxLength}
      error={error}
      onChangeText={onChange}
      onBlur={handleBlur}
      defaultValue={value}
    />
    {helperText && <Caption>{helperText}</Caption>}
  </>
);

export default TextInput;
