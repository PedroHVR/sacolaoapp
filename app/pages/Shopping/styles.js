import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shoppingView: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  searchbarDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    maxWidth: '100%',
    alignItems: 'center',
    marginRight: 80,
  },
  FAB: {
    backgroundColor: '#E76F51',
    marginRight: '2%',
    marginLeft: '2%'
  },
  viewUnities: {
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  viewProduct: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  containerModal: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles