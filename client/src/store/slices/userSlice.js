import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  getUserInfo,
  getAllUsers,
  newUser,
  updateUser,
  deleteUser,
} from "../actions/userAction";

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
  isLogedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    visibleLogin(state) {
      state.isLogedIn = !state.isLogedIn;
    },
  },
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

    // new user
    [newUser.pending]: (state) => {
      state.loading = true;
    },
    [newUser.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        success: true,
      };
    },
    [newUser.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },

    // update user
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        success: true,
      };
    },
    [updateUser.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },

    // delete user
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        success: true,
        error: payload,
      };
    },
    [deleteUser.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },
  },
});

export const userActionReducer = userSlice.actions;
export default userSlice.reducer;
