import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
};
const writeToBasket = (item) => {
  localStorage.setItem("basket", JSON.stringify(item));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extracted = state.products && state.products.filter((product)=>product.id!=action.payload.id)
        findProduct.count+=action.payload.count
        state.products=[...extracted,findProduct]
        writeToBasket(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeToBasket(state.products);
      }
    }
  }
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;