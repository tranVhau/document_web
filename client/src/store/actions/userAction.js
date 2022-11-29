import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import userAPI from "../../api/userAPI";

//THUNK
//register
export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make request to backend
      await axios.post(
        "http://localhost:8000/api/auth/register",
        { firstName, email, password },
        config
      );
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (userLoginData, { rejectWithValue }) => {
    try {
      const data = await userAPI.login(userLoginData);
      localStorage.setItem("userToken", data.access_token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// get userInfo

export const getUserInfo = createAsyncThunk(
  "user/me",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await userAPI.me();
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "user/getAllUser",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await userAPI.getAll();
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//new user form admin page action

export const newUser = createAsyncThunk(
  "user/newUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { user } = payload;
      const res = await userAPI.store(user);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload, { rejectWithValue }) => {
    const { id, user } = payload;
    try {
      console.log(payload);
      const res = await userAPI.update(id, user);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await userAPI.delete(id);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
