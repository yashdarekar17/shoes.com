
// src/Store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// ✅ Safe parse function
function getSavedCart() {
  try {
    const raw = localStorage.getItem('cart');
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : defaultCart;
  } catch (e) {
    return defaultCart;
  }
}

const defaultCart = {
  page1: [],
  page2: [],
  page3: [],
  page4: [],
  page5: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getSavedCart(),
  },
  reducers: {
    addToCart(state, action) {
      const { page, productId, quantity } = action.payload;

      if (!state.items[page]) {
        state.items[page] = [];
      }

      const existingItem = state.items[page].find(item => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items[page].push({ productId, quantity });
      }
    },

    changeQuantity(state, action) {
      const { page, productId, quantity } = action.payload;

      const cart = state.items[page];
      if (!cart) return;

      const index = cart.findIndex(item => item.productId === productId);
      if (index !== -1) {
        if (quantity > 0) {
          cart[index].quantity = quantity;
        } else {
          cart.splice(index, 1); // Remove if 0
        }
      }
    },

    clearPageCart(state, action) {
      const page = action.payload;
      state.items[page] = [];
    },

    loadCartFromDB(state, action) {
      // ✅ make sure payload is object
      if (typeof action.payload === 'object' && action.payload !== null) {
        state.items = action.payload;
      }
    },
  },
});

// ✅ Middleware to persist cart in localStorage after every action
export const persistCartMiddleware = store => next => action => {
  const result = next(action);
  const cartState = store.getState().cart.items;
  localStorage.setItem('cart', JSON.stringify(cartState));
  return result;
};

export const {
  addToCart,
  changeQuantity,
  clearPageCart,
  loadCartFromDB,
} = cartSlice.actions;

export default cartSlice.reducer;
