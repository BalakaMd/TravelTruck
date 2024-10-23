import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { vehiclesReducer } from './vehiclesSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    vehicles: vehiclesReducer,
    favorites: favoritesReducer,
  },
});
