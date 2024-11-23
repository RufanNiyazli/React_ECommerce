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
  drawer: false
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
        const extracted =
          state.products &&
          state.products.filter((product) => product.id != action.payload.id);
        findProduct.count += action.payload.count;
        state.products = [...extracted, findProduct];
        writeToBasket(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeToBasket(state.products);
      }
    },
    deleteBasket: (state, action) => {
      const findProduct = state.products && state.products.find((product)=>product.id==action.payload.id);
      findProduct.count-=1
      if (findProduct.count==0) {
        const extractedProduct= state.products && state.products.filter((product)=>product.id!=action.payload.id)
        state.products=[...extractedProduct]
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    }
  }
});

export const { addToBasket, setDrawer,extractedProduct } = basketSlice.actions;
export default basketSlice.reducer;
