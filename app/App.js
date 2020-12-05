import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Router from './components/Router/Router';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme/theme';

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar translucent backgroundColor="#264653" />
        <Router />
      </PaperProvider>
    </>
  );
};


export default App;
