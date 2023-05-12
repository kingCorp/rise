import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export default (sourceAction: () => void) => {
  const backAction = () => {
    sourceAction?.();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return backAction;
};
