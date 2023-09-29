import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';

const store = configureStore({
  reducer: {
    categories: categorySlice,
  },
});

export default store;