import { configureStore } from '@reduxjs/toolkit';
import someReducerFun from '../features/counter/MasterDetailSlice';

export const store = configureStore({
  reducer: {
    someReducer: someReducerFun,
  },
});
