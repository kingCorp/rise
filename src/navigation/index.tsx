import React, {useEffect, useState, useCallback} from 'react';
import {useColorScheme, ColorSchemeName} from 'react-native';
import navigationService, {_navigator} from './navigationService';
import RootStack from './RootStack';
import AppContext from '../AppContext';

const Root = () => {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName>(
    'light' || useColorScheme(),
  );

  const toggleTheme = useCallback((colorScheme: ColorSchemeName) => {
    setCurrentTheme(colorScheme);
  }, []);

  const _hideSplash = () => {
    // setTimeout(() => SplashScreen.hide(), 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      _hideSplash();
    }, 300);
  }, []);

  return (
    <AppContext currentTheme={currentTheme}>
      <RootStack />
    </AppContext>
  );
};

export const NAV_ROUTES = {
  ONBOARDING: 'ONBOARDING',
  SIGNUP: 'SIGNUP',
  SIGNIN: 'SIGNIN',
  DASHBOARD: 'DASHBOARD',
};

export default Root;
