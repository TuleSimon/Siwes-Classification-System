import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slices'

export const store = configureStore({
  reducer: {
    slice: themeReducer,
  },
});
