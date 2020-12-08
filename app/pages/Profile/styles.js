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
  viewActions: {
    display: "flex",
    minHeight: "20%",
    justifyContent: 'space-evenly'
  },
  imageDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '30%',
    width: '100%',
  },
  fab: {
    alignSelf: 'flex-end',
    marginTop: '8%',
    backgroundColor: "#E76F51",
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles
