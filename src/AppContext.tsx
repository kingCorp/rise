import React, {useState} from 'react';
import {ReactNode} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {ColorSchemeName} from 'react-native';
import { _navigator } from './navigation/navigationService';
import { LightTheme } from './styles/theme';

type Props = {
  children?: ReactNode;
  currentTheme: ColorSchemeName;
};

export default ({children, currentTheme}: Props) => {
  const [isNavReady, setIsNavReady] = useState(false); //use this variable in case of deeplink
  return (
    <NavigationContainer
      ref={_navigator}
      theme={currentTheme === 'dark' ? DarkTheme : LightTheme}
      onReady={() => setIsNavReady(true)}>
      {children}
    </NavigationContainer>
  );
};
