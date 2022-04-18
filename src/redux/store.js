import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducers from './contacts-reducers';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persisteContactReducer = persistReducer(persistConfig, contactsReducers);

export const store = configureStore({
  reducer: {
    contacts: persisteContactReducer,
  },
});

export const persistor = persistStore(store);
