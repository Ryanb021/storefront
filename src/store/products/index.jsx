import { createSlice } from '@reduxjs/toolkit';

let tempState = [];

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return tempState.filter(e => e.category === action.payload.name);
    },
    updateProduct: (state, action) => {
      return tempState.map(product => {
        if (product.name === action.payload.name) {
          return action.payload;
        }
        return product;
      })
    },
    initialSetProducts: (state, action) => {
      tempState = [...action.payload];
      return action.payload;
    }
  }
})

export const { setProducts, updateProduct, initialSetProducts } = productSlice.actions;
export default productSlice.reducer;

// const initialState = [
//   { name: 'TV', category: 'electronics', price: 800.00, inStock: 10 },
//   { name: 'Radio', category: 'electronics', price: 150.00, inStock: 30 },
//   { name: 'Shirt', category: 'clothing', price: 15.00, inStock: 50 },
//   { name: 'Socks', category: 'clothing', price: 10.00, inStock: 40 },
//   { name: 'Apples', category: 'food', price: 1.99, inStock: 300 },
//   { name: 'Eggs', category: 'food', price: 4.99, inStock: 48 },
//   { name: 'Bread', category: 'food', price: 4.50, inStock: 60 },
// ];

// let tempState = [...initialState];

// const productsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SET':
//       return initialState.filter(product => product.category === payload.name)
//     case 'ADD-PRODUCT':

//       let activeCategory = payload.category;
//       console.warn(activeCategory)

//       tempState = tempState.map(product => product.name === payload.name ? {...product, inStock: product.inStock - 1} : product)

//       let results = tempState.filter(product => product.category === activeCategory);
//       console.log('is inventory correct for all categories?', tempState);
//       console.log(results);
     
//       return results
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default productsReducer;
