import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
};

const ReduxState = createSlice({
  name: "BlogApp",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },
    logoutState: (state) => {
      state.user = null;
    },
  },
});

export const { loginState, logoutState } = ReduxState.actions;

export default ReduxState.reducer;
