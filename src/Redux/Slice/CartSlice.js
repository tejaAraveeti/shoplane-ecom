import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishListItems: [],
  heartActive: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const tempItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempItem);
       
      } else {
        state.cartItems[itemIndex].itemQuantity += 1;
      }
    },

    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].itemQuantity > 1) {
          state.cartItems[itemIndex].itemQuantity -= 1;
        } else {
          state.cartItems.map(() => {
            const filteredCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
            state.cartItems = filteredCartItems;
          });
        }
      }
    },
    deleteFromCart(state, action) {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filteredCartItems;
      
    },
    addToWishlist(state, action) {
      let itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const filteredWishItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = filteredWishItems;
        
      } else {
        const tempItem = { ...action.payload, heart: true };
        state.wishListItems.push(tempItem);
        
      }
    },
    removeFromWishlist(state, action) {
      state.wishListItems.map(() => {
        const filteredWishItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = filteredWishItems;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
