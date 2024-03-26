import { configureStore } from '@reduxjs/toolkit';
import { budgetSlice } from './BudgetSlice';

export const store = configureStore({
  reducer: {
    budget: budgetSlice.reducer,
  },
  devTools: true,
})