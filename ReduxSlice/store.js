import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./CarSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
