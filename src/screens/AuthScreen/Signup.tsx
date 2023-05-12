import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {NAV_ROUTES} from '../../navigation';

interface props {
  navigation: NavigationProp<any, any>;
  route?: RouteProp<any, any>;
}

const SignupScreen = ({navigation, route}: props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SIGNIN SCREEN</Text>

      <TouchableOpacity onPress={() => navigation.navigate(NAV_ROUTES.SIGNIN)}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
