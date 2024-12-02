import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selected: {},
  loading: false
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const getSelectedItem = createAsyncThunk(
  "getSelectedItem",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        console.log(action.error);
      })
      // getSelectedItem fulfilled durumunu ekleyin
      .addCase(getSelectedItem.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.loading = false;
      });
  }
});

export const {} = productSlice.actions;
export default productSlice.reducer;
