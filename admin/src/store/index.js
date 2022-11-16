import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import categoryReducer from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});
export default store;
