import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginPayload} from '../types/auth';

// Define the initial state using that type
const initialState: LoginPayload = {
  email: '',
  token: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    loginFailure: (state, action: PayloadAction<LoginPayload>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: state => {
      state.email = '';
      state.token = '';
    },
  },
});

export const {loginSuccess, loginFailure, logout} = auth.actions;

export default auth.reducer;
