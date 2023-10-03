import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/category/categorySlice";
import productsSlice from "../features/products/productsSlice";
import cardReducer, {
  addToCard,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../features/card/cardSlice";
// import productsByCategorySlice from '../features/productsByCategory/productsByCategorySlice';

const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    // productsByCategory: productsByCategorySlice,
    card: cardReducer,
  },
});

export default store;
export { addToCard, incrementQuantity, decrementQuantity, removeItem };
