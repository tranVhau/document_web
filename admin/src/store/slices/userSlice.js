import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserInfo, getAllUsers } from "../actions/userAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: [],
  userToken,
  error: null,
  success: false,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.access_token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // user info
    [getUserInfo.pending]: (state) => {
      state.loading = true;
    },
    [getUserInfo.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        userInfo: payload,
      };
    },
    [getUserInfo.rejected]: (state, { payload }) => {
      state.loading = false;
    },

    // get All user

    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        users: payload,
        success: true,
      };
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },
  },
});

export default userSlice.reducer;
