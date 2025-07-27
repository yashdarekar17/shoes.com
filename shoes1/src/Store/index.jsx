// store.js
// src/Store/index.jsx
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { persistCartMiddleware } from './Cart'; // cart.js

// ✅ Create and export the store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCartMiddleware),
});

