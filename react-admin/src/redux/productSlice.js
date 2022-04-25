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
      //payload is just id
      state.products.splice(state.products.findIndex((item) => item._id === action.payload));
    },
    //if fails
    deleteProductFailure: (state, _action) => {
      state.isFetching = false;
      state.isError = true;
    },

    //UPDATE PRODUCT
    updateProductStart: (state, _action) => {
      state.isFetching = true;
      state.isError = false;
    },
    //if success
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      //if the update is successful in server it will return the product. use prouct id as payload to also update global state
      state.products[state.products.findIndex((item) => item._id === action.payload)] = action.payload.product;
    },
    //if fails
    updateProductFailure: (state, _action) => {
      state.isFetching = false;
      state.isError = true;
    },
    //POST PRODUCT
    addProductStart: (state, _action) => {
      state.isFetching = true;
      state.isError = false;
    },
    //if success
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      //if the post is successful in server it will return the product. use prouct id as payload to also update global state
      state.products.push(action.payload);
    },
    //if fails
    addProductFailure: (state, _action) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

// action is be dispatched in component/page
//what ever passed in the action are payload
export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
