import {createSlice} from '@reduxjs/toolkit';

interface AppUserState {
  userData: object;
  isAuthenticated?: boolean;
}
const initialState: AppUserState = {
  userData: {},
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearState: state => {
      state.userData = {};
      state.isAuthenticated = false;
    },
  },
});

// actions
export const {setUser, setAuthenticated, clearState} = userSlice.actions;

// reducer
export const authReducer = userSlice.reducer;

// selectors
export const getIsAuthorizedSelector = (state: {user: AppUserState}) =>
  state?.user?.isAuthenticated;
export const getCurrentUser = (state: { user: AppUserState}) => state?.user?.userData;


// thunks
export const signUpUser = (credentials: any) => async (dispatch: any) => {
    try {
     
    } catch (error) {
     
    }
  };

export const signInUser = (credentials: any) => async (dispatch: any) => {
  try {
   
  } catch (error) {
   
  }
};

