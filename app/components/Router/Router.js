import React from 'react';
import { Router as RouterSwitch, Scene } from 'react-native-router-flux';
import useAuth from '../../hooks/useAuth';

import {
  Register,
  Login,
  Profile,
  Shopping,
  ShoppingCart,
  Orders,
  Helping,
  Settings
} from '../../pages';

import { ProductsByCategory } from '../../pages/Shopping/components';

const Router = () => {
  const { authenticated } = useAuth()

  return (
    <RouterSwitch>
      <Scene key="root" hideNavBar>
        {authenticated &&
          <>
            <Scene hideNavBar key="profile" component={Profile}/>
            <Scene hideNavBar key="settings" component={Settings}/>
            <Scene hideNavBar key="shopping" component={Shopping}/>
            <Scene hideNavBar key="orders" component={Orders}/>
            <Scene hideNavBar key="helpings" component={Helping}/>
            <Scene hideNavBar key="productsByCategory" component={ProductsByCategory}/>
            <Scene hideNavBar key="shoppingCart" component={ShoppingCart}/>
          </>
        }
        {!authenticated &&
          <>
            <Scene hideNavBar key="register" component={Register}/>
            <Scene hideNavBar key="login" component={Login} initial/>
          </>
        }
      </Scene>
    </RouterSwitch>
  );
};

export default Router;
