import {StackActions, CommonActions} from '@react-navigation/native';

import * as React from 'react';

export const _navigator = React.createRef<any>();

function navigate(route: string, params?: Object) {
  _navigator.current?.navigate(route, params);
}

function reset(
  routes: Array<{name: string; params?: Object}>,
  index: number = 1,
) {
  _navigator.current?.dispatch(
    CommonActions.reset({
      index,
      routes: routes,
    }),
  );
}

function pop(n = 1) {
  const popAction = StackActions.pop(n);
  _navigator.current?.dispatch(popAction);
}

function getCurrentRoute() {
  return _navigator.current?.getCurrentRoute().name;
}

function popToTop() {
  _navigator.current?.dispatch(StackActions.popToTop());
}

export default {
  navigate,
  reset,
  pop,
  popToTop,
  getCurrentRoute,
};
