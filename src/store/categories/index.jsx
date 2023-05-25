let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics on Sale!' },
    { name: 'food', displayName: 'Food', description: 'Food gives you energy.'},
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing that will make you look good.' },
  ],
  activeCategory: ''
};

const categoryReducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SET':
      return {
        ...state,
        activeCategory: payload,
      };
    case 'RESET':
      return initialState;
    default: 
      return state;
  }
};

export default categoryReducer;
