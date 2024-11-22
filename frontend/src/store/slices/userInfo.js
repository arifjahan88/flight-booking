import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

// Selectors
export const selectUser = (state) => state?.userReducer?.userInfo;

export default userSlice.reducer;
