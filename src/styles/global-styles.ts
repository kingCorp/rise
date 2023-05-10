import {Platform, StatusBar, StyleSheet} from 'react-native';
import {lightTheme} from './colors';
import {normalize} from './normalize';
import {Typography} from './typography';
import { Fonts } from '../assets/fonts';

export const RiseStyles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    backgroundColor: lightTheme.WHITE,
  },
  scrollViewStyle: {
    flex: 1,
  },
  fontBold: {
    fontFamily: Fonts.MulishBold,
  },
  fontRegular: {
    fontFamily: Fonts.MulishRegular,
  },
  fontMedium: {
    fontFamily: Fonts.MulishMedium,
  },
  fontLight: {
    fontFamily: Fonts.MulishLight,
  },
  fontExtraLight: {
    fontFamily: Fonts.MulishExtraLight,
  },
  fontSemiBold: {
    fontFamily: Fonts.MulishSemiBold,
  },
  fontExtraBold: {
    fontFamily: Fonts.MulishExtraBold,
  },
  fontBlack: {
    fontFamily: Fonts.MulishBlack,
  },
  textCenter: {
    textAlign: 'center',
  },
  flexDisplay: {
    display: 'flex',
  },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  dotContainer: {
    marginBottom: 67,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 50,
    marginHorizontal: 10,
    borderColor: lightTheme.hGRAY,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  title: {
    ...Typography.H2,
    color: lightTheme.kBLK,
    fontFamily: Fonts.MulishBlack,
  },
  subTitle: {color: lightTheme.hGRAY},
  labelStyle: {
    ...Typography.Caption,
    fontFamily: Fonts.MulishRegular,
    color: lightTheme.kBLK,
  },
  headerTitle: {
    textAlign: 'center',
    fontFamily: Fonts.MulishBlack,
    fontSize: normalize(17),
    fontWeight: Platform.OS == 'ios' ? '900' : '500',
  },
  rightContainer: {
    marginRight: 20,
  },
  rightHeaderButton: {
    height: 'auto',
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: normalize(12),
    minWidth: normalize(40),
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.LkGRY,
    opacity: 0.3,
  },
  headerStyles: {
    shadowOffset: {
      width: 0,
      height: 0.05,
    },
    elevation: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3.84,
    elevation: 1.7,
  },
});
