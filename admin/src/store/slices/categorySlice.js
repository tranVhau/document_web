import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCate,
  getCate,
  newCate,
  delCate,
} from "../actions/categoryAction";

const initialState = {
  loading: false,
  category: [],
  error: null,
  success: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    //get category

    [getCate.pending]: (state) => {
      state.loading = true;
    },
    [getCate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.category = payload;
      state.success = true;
    },
    [getCate.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //add category

    [newCate.pending]: (state) => {
      state.loading = true;
    },
    [newCate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      // state.category = state.category.push(payload);
    },
    [newCate.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //delete

    // getAll category
    [getAllCate.pending]: (state) => {
      state.loading = true;
    },
    [getAllCate.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        category: payload,
        success: true,
      };
    },
    [getAllCate.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },
  },
});

export default categorySlice.reducer;
