import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./operation";
import user from "../../types/user";

interface AuthState {
  isAuthenticated: boolean;
  user: user | null;
  isLoggingIn: boolean;
  loginError: null | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoggingIn: false,
  loginError: null as string | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.isLoggingIn = true;
        state.loginError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggingIn = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoggingIn = false;
        state.loginError = action.payload as string;
      });
  },
});

export const { logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
