import { createSlice } from '@reduxjs/toolkit';

//https://redux-toolkit.js.org/tutorials/quick-start
//essentially this is to create the actions (addproduct)to use to dispatch to the store and update our staet
//initial state is the first state of the store/cart store(we have the products states. quantity state and total state)

//what do we want the global state variable  to hold ; product, quantity and total

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    //actions
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

//addProduct is an action
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
