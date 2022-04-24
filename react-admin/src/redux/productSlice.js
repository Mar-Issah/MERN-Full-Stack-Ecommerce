import { createSlice } from '@reduxjs/toolkit';

//https://redux-toolkit.js.org/tutorials/quick-start
//to get product data from server into client global state

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    isError: false,
  },
  reducers: {
    //GET ALL PRODUCTS
    getProductStart: (state, _action) => {
      state.isFetching = true;
      state.isError = false;
    },
    //if success
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    //if fails
    getProductFailure: (state, _action) => {
      state.isFetching = false;
      state.isError = true;
    },

    //DELETE PRODUCT
    deleteProductStart: (state, _action) => {
      state.isFetching = true;
      state.isError = false;
    },
    //if success
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      // state.products.filter((item) => item._id !== action.payload.id);
      //splice removes instantly as it doesnt return new array like filter
      //OR action.id
      state.products.splice(state.products.findIndex((item) => item._id === action.payload.id));
    },
    //if fails
    deleteProductFailure: (state, _action) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

// action is be dispatched in component/page
//what ever passed in the action are payload
export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure } = productSlice.actions;
export default productSlice.reducer;
