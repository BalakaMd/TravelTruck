import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  type: '',
  priceRange: { min: 0, max: 1000 },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      return { ...state, ...payload };
    },
    resetFilters: () => initialState,
  },
});

export const { changeFilter, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
