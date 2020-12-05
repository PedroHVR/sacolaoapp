import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
  },
  loginView: {
    display: 'flex',
    minHeight: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  inputsDiv: {
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }
});

export default styles