import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/category/categorySlice';
import productsSlice from '../features/products/productsSlice';
// import productsByCategorySlice from '../features/productsByCategory/productsByCategorySlice';

const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    // productsByCategory: productsByCategorySlice,
  },
});

export default store;