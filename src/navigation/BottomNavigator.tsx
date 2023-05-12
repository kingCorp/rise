import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {NAV_ROUTES} from '.';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Spacing} from '../styles/spacing';
import {lightTheme} from '../styles/colors';

const RouteComponent = ({
  onPress = () => {},
  labelColor = 'red',
  image = '',
  label = 'Home',
}) => (
  <TouchableOpacity onPress={onPress} style={styles.route}>
    <SvgXml
      xml={image}
      height={Platform.OS === 'ios' ? 20 : 21}
      style={Spacing.mb2}
    />
  </TouchableOpacity>
);

// Tab Navigator
const Tab = createBottomTabNavigator();
export default () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
    // <Tab.Navigator
    //   initialRouteName={NAV_ROUTES.DASHBOARD}
    //   backBehavior={'initialRoute'}
    //   screenOptions={({route, navigation}) => ({
    //     tabBarIcon: ({focused, color}) => {
    //       const {name} = route;
    //       if (name === NAV_ROUTES.DASHBOARD) {
    //         return (
    //           <RouteComponent
    //             onPress={() => navigation.navigate(NAV_ROUTES.DASHBOARD)}
    //             label="Home"
    //             labelColor={color}
    //             // image={focused ? HomeActive : Home}
    //           />
    //         );
    //       }
    //       // if (name === NAV_ROUTES.PAYMENTDASHBOARD) {
    //       //   return (
    //       //     <RouteComponent
    //       //       onPress={() => navigation.navigate(NAV_ROUTES.PAYMENTDASHBOARD)}
    //       //       label="Payments"
    //       //       labelColor={color}
    //       //       image={focused ? PaymentActive : Payment}
    //       //     />
    //       //   );
    //       // }
    //       // if (name === NAV_ROUTES.SELLDASHBOARD) {
    //       //   return (
    //       //     <RouteComponent
    //       //       onPress={() => navigation.navigate(NAV_ROUTES.SELLDASHBOARD)}
    //       //       label="Sell"
    //       //       labelColor={color}
    //       //       image={
    //       //         focused ? SellBottomNavIconActive : SellBottomNavIconInActive
    //       //       }
    //       //     />
    //       //   );
    //       // }
    //       // if (name === NAV_ROUTES.INVOICING) {
    //       //   return (
    //       //     <RouteComponent
    //       //       onPress={() => navigation.navigate(NAV_ROUTES.INVOICING)}
    //       //       label="Invoicing"
    //       //       labelColor={color}
    //       //       image={focused ? InvoicingActive : InvoicingNav}
    //       //     />
    //       //   );
    //       // }
    //       // if (name === NAV_ROUTES.MORE) {
    //       //   return (
    //       //     <RouteComponent
    //       //       onPress={() => navigation.navigate(NAV_ROUTES.MORE)}
    //       //       label="More"
    //       //       labelColor={color}
    //       //       image={focused ? More : MoreInactive}
    //       //     />
    //       //   );
    //       // }
    //     },
    //   })}
    //   tabBarOptions={{
    //     style: {
    //       backgroundColor: 'white',
    //       // ...Platform.select({
    //       //   android: {height: normalize(60, 'height')},
    //       //   ios: {height: normalize(80, 'height')},
    //       // }),
    //       // borderTopColor: colors.LkGRY,
    //     },
    //     tabStyle: {
    //       backgroundColor: lightTheme.WHITE,
    //       // ...Platform.select({android: {paddingBottom: 4}}),
    //     },
    //     showLabel: false,
    //     activeTintColor: lightTheme.kBLK,
    //     inactiveTintColor: lightTheme.hGRAY,
    //   }}>
    //   {/* <Tab.Screen name={NAV_ROUTES.DASHBOARD} component={Dashboard} />
    //   <Tab.Screen
    //     name={NAV_ROUTES.PAYMENTDASHBOARD}
    //     component={PaymentScreen.PaymentDashboard}
    //   />
    //   <Tab.Screen
    //     name={NAV_ROUTES.SELLDASHBOARD}
    //     component={PosScreens.SellDashboard}
    //   />
    //   <Tab.Screen name={NAV_ROUTES.INVOICING} component={Invoicing} />
    //   <Tab.Screen name={NAV_ROUTES.MORE} component={AccountScreens.Account} /> */}
    // </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  route: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    ...Platform.select({android: {paddingBottom: 10}}),
  },
});
