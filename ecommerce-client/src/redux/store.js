import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSliceRedux';
import userReducer from './userSliceRedux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//this is how we create /cofigure the store . it takes an object ,reducer(required) cartReducer and userRducer and midlleware(optional)

//https://redux-toolkit.js.org/usage/usage-guide for persit
//copy and paste here persist code from site
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
      user: persistedReducer,
    },
  });

//add below to index.js
export let persistor = persistStore(store);
