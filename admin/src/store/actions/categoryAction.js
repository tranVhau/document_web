import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPI from "../../api/categoryAPI";

//THUNK

export const getAllCate = createAsyncThunk(
  "category/getAllCate",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await categoryAPI.getAll();
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

// get specify category

export const getCate = createAsyncThunk(
  "category/getCate",
  async (id, { rejectWithValue }) => {
    try {
      const res = await categoryAPI.get(id);
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

// delete category

export const delCate = createAsyncThunk(
  "category/deleteCate",
  async (id, { rejectWithValue }) => {
    try {
      const res = await categoryAPI.delete(id);
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

//

// update category

export const update = createAsyncThunk(
  "category/updateCate",
  async (payload, { rejectWithValue }) => {
    const { id, category } = payload;
    try {
      const res = await categoryAPI.update(id, category);
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

// new category

export const newCate = createAsyncThunk(
  "category/newCate",
  async (category, { rejectWithValue }) => {
    try {
      const res = await categoryAPI.store(category);
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
