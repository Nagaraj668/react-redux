import { createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: "someName",
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
export const selectChatData = (state) => state.someReducer.chatData;
export default reduxSlice.reducer;
