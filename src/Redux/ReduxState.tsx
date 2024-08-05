import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  profileDetails: {
    fullName: "",
    gender: "",
    bio: "",
    profession: "",
  },
  page: 1,
};

const ReduxState = createSlice({
  name: "BlogApp",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },
    fullNameState: (state: any, { payload }) => {
      state.profileDetails.fullName = payload;
    },
    genderState: (state: any, { payload }) => {
      state.profileDetails.gender = payload;
    },
    bioState: (state: any, { payload }) => {
      state.profileDetails.bio = payload;
    },
    professionState: (state: any, { payload }) => {
      state.profileDetails.profession = payload;
    },
    mainPage: (state) => {
      state.page = 1;
    },
    nextpage: (state) => {
      state.page += 1;
    },
    prevpage: (state) => {
      state.page -= 1;
    },
    logoutState: (state) => {
      state.user = null;
    },
  },
});

export const {
  loginState,
  fullNameState,
  genderState,
  bioState,
  professionState,
  mainPage,
  nextpage,
  prevpage,
  logoutState,
} = ReduxState.actions;

export default ReduxState.reducer;
