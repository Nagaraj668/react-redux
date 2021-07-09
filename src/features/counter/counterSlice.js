import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  someProp: 23
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    somePropIncrement: (state) => {
      state.someProp += 1;
    }
  }
});

export const { increment, decrement, somePropIncrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectSomeProp = (state) => state.counter.someProp;

export default counterSlice.reducer;
