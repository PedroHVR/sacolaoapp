import React from 'react';
import { Router as RouterSwitch, Scene } from 'react-native-router-flux';

import {
  Register,
  Login
} from '../../pages';

const Router = () => {

  return (
    <RouterSwitch>
      <Scene key="root">
        <Scene hideNavBar key="register" component={Register}/>
        <Scene
          hideNavBar
          key="login"
          component={Login}
          initial
        />
      </Scene>
    </RouterSwitch>
  );
};

export default Router;
