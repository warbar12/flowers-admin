import { createSlice } from "@reduxjs/toolkit";
import * as asyncActions from "./asyncActions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("user"))?.token || null,
  role: JSON.parse(localStorage.getItem("user"))?.role || null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncActions.login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncActions.login.fulfilled, (state, action) => {
        const userData = action.payload;
        localStorage.setItem("user", JSON.stringify(userData));
        return {
          ...state,
          loading: false,
          user: userData,
          token: userData.token,
          role: userData.role,
        };
      })
      .addCase(asyncActions.login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
