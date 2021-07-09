import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/MasterDetailSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
