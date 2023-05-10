import {Platform, StyleSheet} from 'react-native';
import {normalize} from './normalize';

export const Typography = StyleSheet.create({
  font8: {
    fontSize: normalize(8),
    lineHeight: normalize(11),
  },
  font9: {
    fontSize: normalize(9),
    lineHeight: normalize(11),
  },
  font10: {
    fontSize: normalize(10),
    lineHeight: normalize(13),
  },
  font11: {
    fontSize: normalize(11),
    lineHeight: normalize(15),
  },
  font12: {
    fontSize: normalize(12),
    lineHeight: normalize(18),
  },
  font13: {
    fontSize: normalize(13),
    lineHeight: normalize(18),
  },
  font14: {
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  font15: {
    fontSize: normalize(15),
    lineHeight: normalize(20),
  },
  font16: {
    fontSize: normalize(16),
    lineHeight: normalize(20),
  },
  font17: {
    fontSize: normalize(17),
    lineHeight: normalize(22),
  },
  font18: {
    fontSize: normalize(18),
    lineHeight: normalize(22),
  },
  font19: {
    fontSize: normalize(19),
    lineHeight: normalize(23),
  },
  font20: {
    fontSize: normalize(20),
    lineHeight: normalize(25),
  },
  font24: {
    fontSize: normalize(24),
    lineHeight: normalize(30),
  },
  font28: {
    fontSize: normalize(28),
    lineHeight: normalize(34),
  },
  font34: {
    fontSize: normalize(34),
    lineHeight: normalize(41),
  },
  font40: {
    fontSize: normalize(40),
    lineHeight: normalize(47),
  },
  H1: {
    ...Platform.select({
      android: {fontSize: normalize(29), lineHeight: normalize(35)},
      ios: {fontSize: normalize(28), lineHeight: normalize(34)},
    }),
  },
  H1Small: {
    ...Platform.select({
      android: {fontSize: normalize(25), lineHeight: normalize(31)},
      ios: {fontSize: normalize(24), lineHeight: normalize(30)},
    }),
  },
  H2: {
    ...Platform.select({
      android: {fontSize: normalize(21), lineHeight: normalize(27)},
      ios: {fontSize: normalize(20), lineHeight: normalize(26)},
    }),
  },
  Body: {
    ...Platform.select({
      android: {fontSize: normalize(16), lineHeight: normalize(22)},
      ios: {fontSize: normalize(15), lineHeight: normalize(21)},
    }),
  },
  Caption: {
    ...Platform.select({
      android: {fontSize: normalize(14), lineHeight: normalize(20)},
      ios: {fontSize: normalize(13), lineHeight: normalize(19)},
    }),
  },
  FootNote: {
    ...Platform.select({
      android: {fontSize: normalize(12), lineHeight: normalize(18)},
      ios: {fontSize: normalize(11), lineHeight: normalize(17)},
    }),
  },
});
