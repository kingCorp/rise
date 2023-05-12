import React from 'react';
import {NAV_ROUTES} from '.';
import BottomNavigator from './BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as AuthScreens from '../screens/AuthScreen';

const RootStack = () => {
  const Root = createNativeStackNavigator();
  return (
    <Root.Navigator>
      {/* <Root.Screen
        name={NAV_ROUTES.DASHBOARD}
        component={BottomNavigator}
        options={{header: () => null}}
      /> */}
      <Root.Screen
        name={NAV_ROUTES.SIGNIN}
        component={AuthScreens.SigninScreen}
        options={{header: () => null}}
      />
      <Root.Screen
        name={NAV_ROUTES.SIGNUP}
        component={AuthScreens.SignupScreen}
        options={{header: () => null}}
      />
    </Root.Navigator>
  );
};

export default RootStack;
