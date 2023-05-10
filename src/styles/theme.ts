import React from 'react';
import {darkTheme, lightTheme} from './colors';

export const LightTheme = {
  dark: false,
  colors: {
    ...lightTheme,
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    ...darkTheme,
  },
};

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  darkTheme: 0,
});
