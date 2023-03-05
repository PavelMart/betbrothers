import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "pending",
  isOpen: false,
  isMenuOpen: false,
  error: null,
  data: {},
};

export const getData = createAsyncThunk("data/getData", async (language, thunkAPI) => {
  try {
    const response = await axios.get("data.json");
    return response.data[language];
  } catch (error) {
    return error.message;
  }
});

export const dataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = "idle";
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.payload;
    });
  },
});

export const { toggle, toggleMenu } = dataSlice.actions;

export default dataSlice.reducer;
