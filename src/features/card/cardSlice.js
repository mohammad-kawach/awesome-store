import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCard: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    addAmountToCard: (state, action) => {
      const { item, quantity } = action.payload;
      const itemInCart = state.data.find((item) => item.id === item.id);
      
      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else {
        state.data.push({ ...item, quantity });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.data.filter(
        (item) => item.id !== action.payload
      );
      state.data = removeItem;
    },
    setCardEmpty: (state) => {
      state.data = [];
    },
  },
});

export default cardSlice.reducer;
export const {
  addToCard,
  addAmountToCard,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  setCardEmpty,
} = cardSlice.actions;