import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

axios.defaults.baseURL = "http://146.190.118.121/api";

export const logIn = createAsyncThunk<
  any,
  string,
  { state: RootState; rejectValue: string }
>("auth/login", async (Credentials, { rejectWithValue }) => {
  try {
    const res: AxiosResponse = await axios.post("/login/", Credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    } else if (error.request) {
      return rejectWithValue("Помилка під час відправлення запиту");
    } else {
      return rejectWithValue("Невідома помилка");
    }
  }
});
