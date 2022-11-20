import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import categoryReducer from "./slices/categorySlice";
import documentReducer from "./slices/documentSlice";
import historyReducer from "./slices/historySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    document: documentReducer,
    history: historyReducer,
  },
});
export default store;
