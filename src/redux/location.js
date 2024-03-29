import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getLocations = createAsyncThunk('locations/getLocations', () => axios
  .get('https://disease.sh/v3/covid-19/countries')
  .then((response) => response.data));

export const getSpecificLocation = createAsyncThunk('locations/getCountry', (country) => axios
  .get(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then((response) => response.data));

const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    loading: false,
    allLocations: [],
    error: '',
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getLocations.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      allLocations: [...action.payload],

    }));
    builder.addCase(getLocations.rejected, (state, action) => ({
      ...state,
      loading: false,
      allLocations: [],
      error: action.error.message,

    }));
    builder.addCase(getSpecificLocation.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getSpecificLocation.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      allLocations: [action.payload],

    }));
    builder.addCase(getSpecificLocation.rejected, (state, action) => ({
      ...state,
      loading: false,
      allLocations: [],
      error: action.error.message,

    }));
  },
});

export default locationsSlice.reducer;
