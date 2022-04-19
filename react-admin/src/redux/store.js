import { configureStore } from '@reduxjs/toolkit';
import adminUserReducer from './adminUserSlice';
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

//combine reudecers to combine all the reducer in the app, save in the the perssit reducer to persist data
// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, adminUserReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//add below to index.js
export let persistor = persistStore(store);
