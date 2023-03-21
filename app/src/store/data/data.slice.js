import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "pending",
  language: "english",
  languages: null,
  sendFormStep: "form",
  activePartner: 0,
  isFormOpen: false,
  isPartnersOpen: false,
  isMenuOpen: false,
  error: null,
  data: {},
  currentPartner: "laystars",
};

export const getData = createAsyncThunk("data/getData", async (language, thunkAPI) => {
  try {
    const response = await axios.get("data.json");
    return thunkAPI.fulfillWithValue({ data: response.data[language], languages: response.data.languages });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const sendData = createAsyncThunk("data/sendData", async (data, thunkAPI) => {
  try {
    const response = await axios.post("send.php", data);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const dataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openFormPopup: (state) => {
      state.isFormOpen = true;
    },
    openPartnersPopup: (state, action) => {
      state.isPartnersOpen = true;
      state.currentPartner = action.payload;
    },
    closePopup: (state) => {
      state.isFormOpen = false;
      state.isPartnersOpen = false;
      state.sendFormStep = "form";
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = "idle";
      state.languages = action.payload.languages;
      state.data = action.payload.data;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.payload;
    });
    builder.addCase(sendData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(sendData.fulfilled, (state) => {
      state.loading = "idle";
      state.sendFormStep = "success";
    });
    builder.addCase(sendData.rejected, (state) => {
      state.loading = "idle";
      state.sendFormStep = "error";
    });
  },
});

export const { openFormPopup, openPartnersPopup, closePopup, toggleMenu, setLanguage, setLoading, setActivePartner } = dataSlice.actions;

export default dataSlice.reducer;
