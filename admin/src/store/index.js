import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import categoryReducer from "./slices/categorySlice";
import documentReducer from "./slices/documentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    document: documentReducer,
  },
});
export default store;
