export const initialState = {
  count: 0,
  list: [], // {name, phone}
  // favorites: [],
}

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        count: state.count + 1,
        list: [...state.list, action.payload],
      }
    case "REMOVE_CONTACT":
      // check the payload, if the object matches remove from the list
      return {
        count: state.count - 1,
        list: state.list.filter(contact => (contact !== action.payload)),
      }
    default:
      return state
  }
}

export const addContact = (contact) => {
  return {
    type: 'ADD_CONTACT',
    payload: contact
  };
}

export const removeContact = (contact) => {
  return {
    type: "REMOVE_CONTACT",
    payload: contact
  }
}
