import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
  },
  imageDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20%',
  },
  inputsDiv: {
    minHeight: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  textProfile: {
    marginTop: 12,
    opacity: 0.54
  }
});

export default styles