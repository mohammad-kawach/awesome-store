import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';
import productsSlice from '../features/products/productsSlice';

const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
  },
});

export default store;