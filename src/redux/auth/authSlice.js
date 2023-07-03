import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './authOperations';
import { Notify } from 'notiflix';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      }
      )
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        Notify.success('Success! You are registered');
      }
      )
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        if (action.payload.includes('400')) {
          Notify.failure('Email already exists');
        } else {
          Notify.failure('Server error, please try again');
        }
      }
      )
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      }
      )
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        Notify.success('Success! Logging you in...');
      }
      )
      .addCase(login.rejected, (state, action) => {
        state.isRefreshing = false;
        Notify.failure('Incorrect email or password');
      }
      )
      .addCase(logOut.pending, (state) => {
        state.isRefreshing = true;
      }
      )
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        Notify.success('Success! Logged Out!');
      }
      )
      .addCase(logOut.rejected, (state, action) => {
        state.isRefreshing = false;
        Notify.failure('Server error, please try again.');
      }
      )
  },
})

export const authReducer = authSlice.reducer;