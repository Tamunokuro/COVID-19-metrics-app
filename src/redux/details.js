import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk('details/Country', (country) => axios
  .get(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then((response) => response.data));

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    loading: false,
    allDetails: [],
    error: '',
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getDetails.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      allDetails: [action.payload],

    }));
    builder.addCase(getDetails.rejected, (state, action) => ({
      ...state,
      loading: false,
      allDetails: [],
      error: action.error.message,

    }));
  },
});

export default detailsSlice.reducer;
