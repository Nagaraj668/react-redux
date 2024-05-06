import { createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: "hello",
  initialState: {
    chatData: []
  },
  reducers: {
    sayHi: (state, action) => {
      state.chatData.push(action.payload)
    },
    sayBye: (state, action) => {
      state.chatData.push(action.payload)
    }
  }
});

export const { sayHi, sayBye } = reduxSlice.actions;
export const selectChatData = (state) => state.hello.chatData;
export default reduxSlice.reducer;
