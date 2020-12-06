import React from 'react';
import { Router as RouterSwitch, Scene } from 'react-native-router-flux';

import {
  Register,
  Login,
  Profile,
  Shopping,
  ShoppingCart
} from '../../pages';
import { ProductsByCategory } from '../../pages/Shopping/components';

const Router = () => {

  return (
    <RouterSwitch>
      <Scene key="root">
        <Scene hideNavBar key="register" component={Register}/>
        <Scene hideNavBar key="login" component={Login} initial/>
        <Scene hideNavBar key="profile" component={Profile}/>
        <Scene hideNavBar key="shopping" component={Shopping}/>
        <Scene hideNavBar key="productsByCategory" component={ProductsByCategory}/>
        <Scene hideNavBar key="shoppingCart" component={ShoppingCart}/>
      </Scene>
    </RouterSwitch>
  );
};

export default Router;
