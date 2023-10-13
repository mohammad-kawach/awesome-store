import { createSlice } from "@reduxjs/toolkit";

const searchedProductsSlice = createSlice({
  name: "searchedProducts",
  initialState: "",
  reducers: {
    setSearchedProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchedProducts } = searchedProductsSlice.actions;
export default searchedProductsSlice.reducer;