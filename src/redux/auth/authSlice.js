import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
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
      }
      )
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
      }
      )
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      }
      )
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }
      )
      .addCase(login.rejected, (state, action) => {
        state.isRefreshing = false;
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
      }
      )
      .addCase(logOut.rejected, (state, action) => {
        state.isRefreshing = false;
      }
      )
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      }
      )
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }
      )
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }
      )
  },
})

export const authReducer = authSlice.reducer;