import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] , // Primary items
    items2: [], // Secondary items
    items3: [],
    items4: [],
    items5: [],
  },
  reducers: {
    addtocart(state, action) {
      const { productId, quantity } = action.payload; // Ensure "quantity" is used
      const existingItem = state.items.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity; // Corrected from "quality"
      } else {
        state.items.push({ productId, quantity }); // Corrected from "quality"
      }
    },
    addtoSecondCart(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items2.find(item2 => item2.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items2.push({ productId, quantity });
      }
    },
    addtothreeCart(state, action) {
        const { productId,quantity } = action.payload;
        const existingItem = state.items3.find(item3 => item3.productId === productId);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.items3.push({ productId,quantity  });
        }
      },
      addtofourCart(state, action) {
        const { productId, quantity } = action.payload;
        const existingItem = state.items4.find(item4 => item4.productId === productId);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.items4.push({ productId, quantity });
        }
      },
      addtofiveCart(state, action) {
        const { productId, quantity } = action.payload;
        const existingItem = state.items5.find(item5 => item5.productId === productId);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.items5.push({ productId, quantity });
        }
      },
      

      changeQuantity(state, action) {
        const { productId, quantity } = action.payload;
      const index = state.items.findIndex(item => item.productId === productId);
  
      if (index !== -1) {
          if (quantity > 0) {
              state.items[index].quantity = quantity;  
          } else {
              state.items.splice(index, 1);  
          }
      }
       },
    changeQuantity2(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items2.findIndex(item => item.productId === productId);
  
      if (index !== -1) {
          if (quantity > 0) {
              state.items2[index].quantity = quantity;  
          } else {
              state.items2.splice(index, 1);  
          }
      }
  
      state.items2 = [...state.items2];  
    },
    changeQuantity3(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items3.findIndex(item => item.productId === productId);
  
      if (index !== -1) {
          if (quantity > 0) {
              state.items3[index].quantity = quantity;  
          } else {
              state.items3.splice(index, 1);  
          }
      }
  
      state.items3 = [...state.items3];  
  },
  
    changeQuantity4(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items4.findIndex(item => item.productId === productId);
  
      if (index !== -1) {
          if (quantity > 0) {
              state.items4[index].quantity = quantity;  
          } else {
              state.items4.splice(index, 1);  
          }
      }
  
      state.items4 = [...state.items4];  
    },
    changeQuantity5(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items5.findIndex(item => item.productId === productId);
  
      if (index !== -1) {
          if (quantity > 0) {
              state.items5[index].quantity = quantity;  
          } else {
              state.items5.splice(index, 1);  
          }
      }
  
      state.items5 = [...state.items5];  
    }
    


  },
});

export const { addtocart, addtoSecondCart,changeQuantity,addtothreeCart,addtofourCart,addtofiveCart,changeQuantity2,changeQuantity3,changeQuantity4,changeQuantity5 } = cartSlice.actions;
export default cartSlice.reducer;
