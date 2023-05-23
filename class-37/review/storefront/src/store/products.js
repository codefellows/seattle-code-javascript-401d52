const initialState = {
  allProducts: [
    {
      name: "Computer",
      category: ['electronics'],
      description: "It's a computer.",
      price: 1000,
      quantity: 5
    },
    {
      name: "SmartWatch",
      category: ['electronics', 'softlines'],
      description: "It's a smartwatch.",
      price: 200,
      quantity: 3
    },
    {
      name: "Sweater",
      category: ['softlines'],
      description: "It's a sweater.",
      price: 20,
      quantity: 10
    },
    {
      name: "Bananas",
      category: ['food_grocery', 'pet_supplies'],
      description: "An apple to feed animals or humans.",
      price: 2,
      quantity: 20
    },
    {
      name: "Dog Food",
      category: ['pet_supplies'],
      description: "It's dog food.",
      price: 14,
      quantity: 3
    }
  ],
  productsToDisplay: []
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      console.log('CATEGORY SELECTED FROM PRODUCT REDUCER');
      return {
        ...state,
        productsToDisplay: state.allProducts.filter(prod => {
          return prod.category.includes(action.payload);
        })
      }
    // case "FILTER_TO_CATEGORY":
    //   return {
    //     ...state,
    //     productsToDisplay: state.allProducts.filter(prod => {
    //       return prod.category.includes(action.payload);
    //     })
    //   }
    default:
      return state;
  }
}

export default productReducer;
