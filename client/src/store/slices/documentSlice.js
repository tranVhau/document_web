import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDocument,
  getDocument,
  newDocument,
  getLimitDocument,
  search,
  getByCategory,
  popular,
} from "../actions/documentAction";

const initialState = {
  loading: false,
  document: [],
  error: null,
  success: false,
  shareVisible: false,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    sortDocument(state, action) {
      state.document.sort((docA, docB) => {
        if (action.payload === "?sort=asc") {
          return docA.created_at > docB.created_at ? 1 : -1;
        } else if (action.payload === "?sort=desc") {
          return docA.created_at < docB.created_at ? 1 : -1;
        }
      });
    },

    visibleShareModal(state) {
      state.shareVisible = !state.shareVisible;
    },
  },
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

    // getAll document
    [getLimitDocument.pending]: (state) => {
      state.loading = true;
    },
    [getLimitDocument.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.document = payload;
      state.success = true;
    },
    [getLimitDocument.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // search
    [search.pending]: (state) => {
      state.loading = true;
    },
    [search.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.document = payload;
      state.success = true;
    },
    [search.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get by category id
    [getByCategory.pending]: (state) => {
      state.loading = true;
    },
    [getByCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.document = payload;
      state.success = true;
    },
    [getByCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //popular

    [popular.pending]: (state) => {
      state.loading = true;
    },
    [popular.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.document = payload;
      state.success = true;
    },
    [popular.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const documentReducerActions = documentSlice.actions;
export default documentSlice.reducer;
