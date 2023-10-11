const initialState = {
  contacts: [],
  filter: '',
};

export const phoneBookReducer = (state = initialState, action) => { // { type: 'phoneBook/toAddContact', payload: newContact }
  switch (action.type) {
    case 'phoneBook/toAddContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'phoneBook/toDeleteContact': {
      return {
        ...state,
        filter: "",
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'phoneBook/toChangeFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};


// toAddContact
// toDeleteContact
// toChangeFilter
