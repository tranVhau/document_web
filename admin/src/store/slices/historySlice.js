import { createSlice } from "@reduxjs/toolkit";
import { newHistory, getAllHistory } from "../actions/historyAction";
const initialState = {
  loading: false,
  history: [],
  error: null,
  success: false,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    //add history

    [newHistory.pending]: (state) => {
      state.loading = true;
    },
    [newHistory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      // state.document = state.document.push(payload);
    },
    [newHistory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // getAll document
    [getAllHistory.pending]: (state) => {
      state.loading = true;
    },
    [getAllHistory.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        document: payload,
        success: true,
      };
    },
    [getAllHistory.rejected]: (state, { payload }) => {
      return { loading: false, error: payload };
    },
  },
});

export default historySlice.reducer;
