import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['favorites'],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '', favorites: [] },

  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },

    toggleFavorites(state, { payload }) {
      const isFavorites = state.favorites.some(({ id }) => id === payload.id);
      const index = state.favorites.findIndex(({ id }) => id === payload.id);

      isFavorites
        ? state.favorites.splice(index, 1)
        : (state.favorites = [...state.favorites, payload]);
    },
  },
});

export const { changeFilter, toggleFavorites } = contactSlice.actions;

export const persisteContactsReducer = persistReducer(
  contactsPersistConfig,
  contactSlice.reducer,
);
