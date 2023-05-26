import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter(e => e.name !== action.payload.name);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// const initialState = [];

// const cartReducer = (state=initialState, action) => {
//   const { type, payload } = action;

//   switch(type){
//     case 'ADD-PRODUCT':
//       return [...state, payload];
//     case 'REMOVE':
//       return state.filter(product => product.name !== payload.name);
//     default:
//       return state
//   }
// };

// export default cartReducer;
