import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSliceRedux';
import userReducer from './userSliceRedux';

//this is how we create /cofigure the store . it takes an object ,reducer(required) cartReducer and userRducer and midlleware(optional)

//
export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
