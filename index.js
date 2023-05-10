/**
 * @format
 */

import {AppRegistry, Platform, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = Platform.OS === 'ios' ? false : true;

AppRegistry.registerComponent(appName, () => App);
