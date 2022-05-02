import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts/contact-api';
import { authApi } from './auth/auth-api';
import contactsSlice from './contacts/contacts-slice';
import authSlice from './auth/auth-slice';

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
