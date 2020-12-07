import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Router from './components/Router/Router';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme/theme';
import CartProvider from './providers/cartProvider';
import AuthProvider from './providers/authProvider';

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar translucent backgroundColor="#264653" />
        <AuthProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </AuthProvider>
      </PaperProvider>
    </>
  );
};


export default App;
