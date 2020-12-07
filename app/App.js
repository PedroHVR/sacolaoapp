import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Router from './components/Router/Router';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme/theme';
import CartProvider from './providers/cartProvider';
import AuthProvider from './providers/authProvider';
import ProductProvider from './providers/productProvider';
import OrderProvider from './providers/orderProvider';

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar translucent backgroundColor="#264653" />
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <OrderProvider>
                <Router />
              </OrderProvider>
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </PaperProvider>
    </>
  );
};

export default App;
