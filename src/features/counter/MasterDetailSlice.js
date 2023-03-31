import { createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: "counters",
  initialState: {
    chatData: []
  },
  reducers: {
    sayHi: (state, action) => {
      state.chatData.push(action.payload)
    }
  }
});

export const { sayHi } = reduxSlice.actions;
export const selectChatData = (state) => state.counter.chatData;
export default reduxSlice.reducer;
