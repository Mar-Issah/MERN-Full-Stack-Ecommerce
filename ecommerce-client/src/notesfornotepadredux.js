//This is how you create the global state
//Firts is thecreate slice which blends initial state and reducers functions which accepts the state and actions

import { createSlice } from '@reduxjs/toolkit';

//https://redux-toolkit.js.org/tutorials/quick-start
//essentially this is to create the actions (addproduct)to use to dispatch to the store and update our staet
//initial state is the first state of the store/cart store(we have the products states. quantity state and total state)

//what do we want the global state variable  to hold ; product, quantity and total

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0, //actually when a new product is added to cart regardless of quantity of product the customer is buying it one item in the cart
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

//addProduct is an action
export const { addProduct } = cartSlice.actions; //to be used in the component
//export default cartSlice.reducer; //to be used in store

//NOW STORE
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartRedux';

//this is how we create /cofigure the store . it takes an object ,reducer(required)  and midlleware(optional)
// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

//TO USE THE ABOVE WE HAVE TO WRAP OUR ROOT F ROOT WITH PROVIDER AND STORE TO MAKE IT AVAILBE GENRALLY
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store';

//replace the React.Strictmode with Provider
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

//USE IN THE COMPONENT
//use slector is used to select and return a field in the state it takes a fxn in thi s case we want the quantity in the cart for use in our navbar cart icon

//import { useSelector } from 'react-redux';
//const quantity = useSelector((state) => state.cart.quantity);
//  <Badge badgeContent={quantity} color='primary'>
//    <ShoppingCartOutlined color='primary' />
//  </Badge>;
