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
      const { productId, quality } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quality += quality;
      } else {
        state.items.push({ productId, quality });
      }
    },
    addtoSecondCart(state, action) {
      const { productId, quality } = action.payload;
      const existingItem = state.items2.find(item2 => item2.productId === productId);
      if (existingItem) {
        existingItem.quality += quality;
      } else {
        state.items2.push({ productId, quality });
      }
    },
    addtothreeCart(state, action) {
        const { productId, quality } = action.payload;
        const existingItem = state.items3.find(item3 => item3.productId === productId);
        if (existingItem) {
          existingItem.quality += quality;
        } else {
          state.items3.push({ productId, quality });
        }
      },
      addtofourCart(state, action) {
        const { productId, quality } = action.payload;
        const existingItem = state.items4.find(item4 => item4.productId === productId);
        if (existingItem) {
          existingItem.quality += quality;
        } else {
          state.items4.push({ productId, quality });
        }
      },
      addtofiveCart(state, action) {
        const { productId, quality } = action.payload;
        const existingItem = state.items5.find(item5 => item5.productId === productId);
        if (existingItem) {
          existingItem.quality += quality;
        } else {
          state.items5.push({ productId, quality });
        }
      },
      

      changeQuantity(state, action) {
        const { productId, quantity = 1 } = action.payload;
    
        // Find the index of the product by `productId`
        const index = state.items.findIndex(item => item.productId === productId);
    
        if (index !== -1) {
            if (quantity > 0) {
                // Update quantity if it's greater than 0
                state.items[index].quantity = quantity;
            } else {
                // Remove the item if quantity is 0 or less
                state.items.splice(index, 1);
            }
        } else {
            console.error(`Product with productId ${productId} not found.`);
        }
    },
    changeQuantity2(state, action) {
        const { productId, quantity = 1 } = action.payload;
    
        // Find the index of the product by `productId`
        const index = state.items2.findIndex(item4 => item4.productId === productId);
    
        if (index !== -1) {
            if (quantity > 0) {
                // Update quantity if it's greater than 0
                state.items2[index].quantity = quantity;
            } else {
                // Remove the item if quantity is 0 or less
                state.items2.splice(index, 1);
            }
        } else {
            console.error(`Product with productId ${productId} not found.`);
        }
    },
    changeQuantity3(state, action) {
        const { productId, quantity = 1 } = action.payload;
    
        // Find the index of the product by `productId`
        const index = state.items3.findIndex(item4 => item4.productId === productId);
    
        if (index !== -1) {
            if (quantity > 0) {
                // Update quantity if it's greater than 0
                state.items3[index].quantity = quantity;
            } else {
                // Remove the item if quantity is 0 or less
                state.items3.splice(index, 1);
            }
        } else {
            console.error(`Product with productId ${productId} not found.`);
        }
    },
    changeQuantity4(state, action) {
        const { productId, quantity = 1 } = action.payload;
    
        // Find the index of the product by `productId`
        const index = state.items4.findIndex(item4 => item4.productId === productId);
    
        if (index !== -1) {
            if (quantity > 0) {
                // Update quantity if it's greater than 0
                state.items4[index].quantity = quantity;
            } else {
                // Remove the item if quantity is 0 or less
                state.items4.splice(index, 1);
            }
        } else {
            console.error(`Product with productId ${productId} not found.`);
        }
    },
    changeQuantity5(state, action) {
        const { productId, quantity = 1 } = action.payload;
    
        // Find the index of the product by `productId`
        const index = state.items5.findIndex(item4 => item4.productId === productId);
    
        if (index !== -1) {
            if (quantity > 0) {
                // Update quantity if it's greater than 0
                state.items5[index].quantity = quantity;
            } else {
                // Remove the item if quantity is 0 or less
                state.items5.splice(index, 1);
            }
        } else {
            console.error(`Product with productId ${productId} not found.`);
        }
    }
    


  },
});

export const { addtocart, addtoSecondCart,changeQuantity,addtothreeCart,addtofourCart,addtofiveCart,changeQuantity2,changeQuantity3,changeQuantity4,changeQuantity5 } = cartSlice.actions;
export default cartSlice.reducer;
