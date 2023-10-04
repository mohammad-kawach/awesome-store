import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardReducer from "../features/card/cardSlice";
import categorySlice from "../features/category/categorySlice";
import productsSlice from "../features/products/productsSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, cardReducer);

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    card: persistedReducer,
  },
});

export const persistor = persistStore(store);