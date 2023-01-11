import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location';

const store = configureStore({
  reducer: {
    locations: locationReducer,
  },
});

export default store;
