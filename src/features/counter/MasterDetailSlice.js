import { createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: "counter1",
  initialState: {
    chatData: []
  },
  reducers: {
    sayHi: (state) => {
      state.chatData.push("hi")
    }
  }
});

export const { sayHi } = reduxSlice.actions;
export const selectChatData = (state) => state.counter.chatData;
export default reduxSlice.reducer;
