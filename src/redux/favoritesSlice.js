// src/redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromStorage = () => {
  try {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error);
    return [];
  }
};

const saveFavoritesToStorage = favorites => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error);
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavoritesFromStorage(),
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
      saveFavoritesToStorage(state);
    },
    removeFavorite: (state, action) => {
      const newState = state.filter(id => id !== action.payload);
      saveFavoritesToStorage(newState);
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
