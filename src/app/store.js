import { configureStore } from '@reduxjs/toolkit';
import counterR from '../features/counter/MasterDetailSlice';

export const store = configureStore({
  reducer: {
    counter: counterR,
  },
});
