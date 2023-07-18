import {combineReducers, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userToken: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.userToken = action.payload;
      state.errorMessage = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false;
      state.userToken = null;
      state.errorMessage = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.userToken = null;
      state.errorMessage = null;
    },
  },
});

export const {loginSuccess, loginFailure, logout} = authSlice.actions;

export default authSlice.reducer;
