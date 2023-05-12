import {createSlice} from '@reduxjs/toolkit';

export type AppLoaderState = {
  loading: boolean;
};

export interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoading} = loaderSlice.actions;

// reducer
export const loaderReducer = loaderSlice.reducer;

// selectors
export const getIsLoading = (state: {loader: LoaderState}) =>
  state?.loader.loading;
