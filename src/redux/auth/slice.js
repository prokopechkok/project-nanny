import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, registerUser } from './operations';

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

export const saveAuthDataToLocalStorage = (authData) => {
  localStorage.setItem('authData', JSON.stringify(authData));
};

export const loadAuthDataFromLocalStorage = () => {
  const authData = localStorage.getItem('authData');
  return authData ? JSON.parse(authData) : null;
};

const removeAuthDataFromLocalStorage = () => {
  localStorage.removeItem('authData');
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = { email: payload.email, name: payload.name };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = false;
        saveAuthDataToLocalStorage({ user: state.user, token: state.token });
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { email: payload.email, name: payload.name };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = false;
        saveAuthDataToLocalStorage({ user: state.user, token: state.token });
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        removeAuthDataFromLocalStorage();
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { email: payload.email, name: payload.name };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.rejected, handleRejected)
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
