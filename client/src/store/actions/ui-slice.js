import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  displayCate: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initValue,
  reducers: {
    toggleCate(state) {
      state.displayCate = !state.displayCate;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
