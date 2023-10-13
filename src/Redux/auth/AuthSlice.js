import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operation';
export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.pending](state) {},
    [logIn.pending](state) {},
    [logOut.pending](state) {},

    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, { payload }) {
      state.user = { name: null, email: null };
      state.token = '';
      state.isLoggedIn = false;
    },

    [logIn.rejected](state, action) {},
    [register.rejected](state, action) {},
    [logOut.rejected](state, action) {},

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const authSliceReducer = authSlice.reducer;
