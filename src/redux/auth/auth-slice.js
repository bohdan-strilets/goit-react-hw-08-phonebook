import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser(state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    clearUser(state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

// const persistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['token'],
// };

// export const persisteAuthReducer = persistReducer(
//   persistConfig,
//   authSlice.reducer,
// );

export const { saveUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
