import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
  },
  profileView: {
    display: 'flex',
    minHeight: '70%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '30%',
    width: '100%',
  },
});

export default styles