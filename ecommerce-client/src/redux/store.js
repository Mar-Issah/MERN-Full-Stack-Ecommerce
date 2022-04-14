import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';

//this is how we create /cofigure the store . it takes an object ,reducer(required)  and midlleware(optional)
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
