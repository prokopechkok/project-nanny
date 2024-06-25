import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('favorites');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Could not load favorites from local storage', e);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites) => {
  try {
    const serializedState = JSON.stringify(favorites);
    localStorage.setItem('favorites', serializedState);
  } catch (e) {
    console.warn('Could not save favorites to local storage', e);
  }
};
const initialState = {
  favorites: loadFavoritesFromLocalStorage(),
};
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites(state, { payload }) {
      state.favorites.push(payload);
      saveFavoritesToLocalStorage(state.favorites);
    },
    removeFavorites(state, { payload }) {
      // const index = state.findIndex((item) => item.id === payload);
      // state.splice(index, 1);
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload
      );
      saveFavoritesToLocalStorage(state.favorites);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
