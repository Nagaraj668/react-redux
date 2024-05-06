import { configureStore } from '@reduxjs/toolkit';
import someReducerTest from '../features/counter/MasterDetailSlice';

export const store = configureStore({
  reducer: {
    hello: someReducerTest,
  },
});
