import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the popup
const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
  },
});

// Export actions to control popup state
export const { openPopup, closePopup } = popupSlice.actions;

// Export the reducer for the slice
export default popupSlice.reducer;
