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
    case 'phoneBook/toChangeFilter': {
      return {
        ...state,
        filter: action.payload,
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
    default:
      return state;
  }
};


export const setHandleAddContact = (newContact) => {
  return ({
    type: 'phoneBook/toAddContact',
    payload: newContact,
  });
};



export const setOnDeleteContact = (id) => {
  return ({
    type: 'phoneBook/toDeleteContact',
    payload: id,
  });
};

export const setOnFilterContact = (event) => {
  const inputFilterValue = event.target.value;
  return ({
    type: 'phoneBook/toChangeFilter',
    payload: inputFilterValue,
  });
};