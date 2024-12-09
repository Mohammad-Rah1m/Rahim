import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popup/popupSlice";
import planReducer from "./features/plan/planSlice"
// This function creates the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: {
      popup: popupReducer,
      plan:planReducer,
    },
  });
};
