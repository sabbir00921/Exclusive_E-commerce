import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice";

export const store = configureStore({
  reducer: { count: counterSlice },
});
