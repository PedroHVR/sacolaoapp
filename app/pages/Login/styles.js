import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
  },
  loginView: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  inputsDiv: {
    minHeight: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }
});

export default styles