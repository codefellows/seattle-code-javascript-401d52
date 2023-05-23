const initialState = {
  activeCategory: "",
  categories: [
    {
      name: "electronics",
      display_name: "Electronics",
      description: "It's full of electricity"
    },
    {
      name: "pet_supplies",
      display_name: "Pet Supplies",
      description: "Supplies for your pet!"
    },
    {
      name: "food_grocery",
      display_name: "Food & Grocery",
      description: "Sustenance"
    },
    {
      name: "softlines",
      display_name: "Softlines",
      description: "AKA Clothings"
    },
  ],
}

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      return {
        ...state,
        activeCategory: action.payload
      }
    default:
      return state;
  }
}

export default categoryReducer;