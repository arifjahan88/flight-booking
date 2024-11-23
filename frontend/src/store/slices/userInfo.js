import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  searchData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { addUser, addSearchData } = userSlice.actions;

// Selectors
export const selectUser = (state) => state?.userReducer?.userInfo;
export const selectSearchData = (state) => state?.userReducer?.searchData;

export default userSlice.reducer;
