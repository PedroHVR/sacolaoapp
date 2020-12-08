import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    margin: 16,
  },
  imageDiv: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  textProfile: {
    marginTop: 12,
    opacity: 0.54
  },
  backButton: {
    marginTop: 20,
  }
});

export default styles