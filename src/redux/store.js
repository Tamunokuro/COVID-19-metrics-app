import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location';
import detailReducer from './details';

const store = configureStore({
  reducer: {
    locations: locationReducer,
    details: detailReducer,
  },
});

export default store;
