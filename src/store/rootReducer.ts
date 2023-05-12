import {combineReducers} from 'redux';
import {AppLoaderState, loaderReducer} from './slices/loaderSlice';

export interface RootState {
  readonly appLoader: AppLoaderState;
}

export default combineReducers<RootState>({
  appLoader: loaderReducer,
});
