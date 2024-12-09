import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the popup
const planSlice = createSlice({
  name: "plan",
  initialState: {
    selectedPlan: "",
  },
  reducers: {
    setPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    clearPlan: (state) => {
      state.selectedPlan = null; // Clear the selected plan
    },
  },
});

// Export actions to control popup state
export const { setPlan, clearPlan } = planSlice.actions;

// Export the reducer for the slice
export default planSlice.reducer;
