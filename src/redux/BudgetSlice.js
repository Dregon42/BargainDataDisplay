import { createSlice } from '@reduxjs/toolkit'

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    value: 0
  },
  reducers: {
    addBudget: (state,action) => {state.messages.push(action.payload)},
    updateBudget: (state, action) => {state.value = action.payload;}
  }
});

// Action creators are generated for each case reducer function
export const { addBudget, updateBudget } = budgetSlice.actions;

export default budgetSlice.reducer;