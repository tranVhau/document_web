import { createAsyncThunk } from "@reduxjs/toolkit";
import historyAPI from "../../api/historyAPI";

//THUNK

export const getAllHistory = createAsyncThunk(
  "history/getAllHistory",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await historyAPI.getAll();
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

//new history

export const newHistory = createAsyncThunk(
  "history/newHistory",
  async (payload, { rejectWithValue }) => {
    const { history } = payload;
    try {
      const res = await historyAPI.store(history);
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

// get history
export const getHistory = createAsyncThunk(
  "history/getHistory ",
  async (id, { rejectWithValue }) => {
    try {
      const res = await historyAPI.get(id);
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

//dashboard overview

export const overview = createAsyncThunk(
  "history/overview ",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await historyAPI.overview();
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
