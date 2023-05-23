const intialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics' },
    { name: 'food', displayName: 'Food', description: 'Food' },
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: '',
};

const reducer = (state = intialState, action) => {
  
  switch(action.type) {
    case  'Select-Category':
    return{
      ...state,
      activeCategory: action.payload,
      products: intialState.products.filter(product => product.category === action.payload),
    }
    case 'Reset':
    return intialState;

    default:
    return state;
  }
}

export const selectCategory = (category) => {
  return {
    type: 'Select-Category',
    payload: category,
  }
}

export const reset = () => {
  return {
    type: 'Reset',
    payload: {},
  }
}

export default reducer;
