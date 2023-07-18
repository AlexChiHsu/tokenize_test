import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const reducer = combineReducers({
  auth: authSlice,
});
export const store = configureStore({
  reducer: {
    reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;