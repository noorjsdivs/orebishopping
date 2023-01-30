import { configureStore } from "@reduxjs/toolkit";
import orebiReducer from "./orebiSlice";

export const store = configureStore({
  reducer: { orebiReducer },
});
