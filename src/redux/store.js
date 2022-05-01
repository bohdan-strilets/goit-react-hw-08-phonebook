import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contact-api';
import { authApi } from './auth-api';
import contactsSlice from './contacts-slice';
import authSlice from './auth-slice';

export const store = configureStore({
  reducer: {
    filter: contactsSlice,
    auth: authSlice,
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
    authApi.middleware,
  ],
});
