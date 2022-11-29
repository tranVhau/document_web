import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import documentReducer from "./slices/documentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    document: documentReducer,
  },
});
export default store;
