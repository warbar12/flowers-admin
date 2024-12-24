import { createAsyncThunk } from "@reduxjs/toolkit";
// TODO: нужно настроить абсолютные импорты из src
import axios from "../../../axios";
import { LOGIN } from "./../../../constants/endpoints";

export const login = createAsyncThunk(
  "auth/fetchUserData",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${LOGIN}`, params);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
