import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  someProp: 0,
  chatData: []
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    somePropIncrement: (state) => {
      state.someProp += 1;
    },
    sayHi: (state) => {
      state.chatData.push("hi")
    }
  }
});

export const { somePropIncrement, sayHi } = counterSlice.actions;

export const selectChatData = (state) => state.counter.chatData;
export const selectSomeProp = (state) => state.counter.someProp;

export default counterSlice.reducer;
