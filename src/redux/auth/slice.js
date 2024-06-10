import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = false;
};
const handleRejected = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { email: payload.email, name: payload.name };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { email: payload.email, name: payload.name };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { email: payload.email, name: payload.name };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.error = false;
      });
  },
});

export const authReducer = authSlice.reducer;
