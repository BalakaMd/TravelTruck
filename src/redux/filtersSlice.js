import { createSlice } from '@reduxjs/toolkit';

// In filtersSlice.js
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: [],
    type: '',
  },
  reducers: {
    setFilters: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export const { changeFilter, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
