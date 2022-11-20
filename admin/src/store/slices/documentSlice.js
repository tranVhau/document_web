import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDocument,
  getDocument,
  update,
  newDocument,
  getAllPendingDocument,
} from "../actions/documentAction";

const initialState = {
  loading: false,
  document: [],
  error: null,
  success: false,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},
  extraReducers: {
    //get document

    [getDocument.pending]: (state) => {
      state.loading = true;
    },
    [getDocument.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        document: payload,
        success: true,
      };
    },
    [getDocument.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },

    //add document

    [newDocument.pending]: (state) => {
      state.loading = true;
    },
    [newDocument.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      // state.document = state.document.push(payload);
    },
    [newDocument.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //update

    [update.pending]: (state) => {
      state.loading = true;
    },
    [update.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      // state.document = state.document.push(payload);
    },
    [update.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // getAll document
    [getAllDocument.pending]: (state) => {
      state.loading = true;
    },
    [getAllDocument.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        document: payload,
        success: true,
      };
    },
    [getAllDocument.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },

    [getAllPendingDocument.pending]: (state) => {
      state.loading = true;
    },
    [getAllPendingDocument.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        document: payload,
        success: true,
      };
    },
    [getAllPendingDocument.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },
  },
});

export default documentSlice.reducer;
