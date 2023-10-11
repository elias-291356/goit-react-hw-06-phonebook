import 'bulma/css/bulma.css';
import React, { useEffect, useState } from 'react';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhonebookItem } from './PhonebookItem/PhonebookItem';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch({
      type: 'phoneBook/toAddContact',
      payload: newContact,
    });
  };

  const onDeleteContact = id => {
    dispatch({
      type: 'phoneBook/toDeleteContact',
      payload: id,
    });
  };

  const onFilterContact = event => {
    const inputFilterValue = event.target.value;
    dispatch({
      type: 'phoneBook/toChangeFilter',
      payload: inputFilterValue,
    });
  };

  const filtered = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="box">
        <PhonebookItem onAddContact={handleAddContact} contacts={contacts} />
        <Filter onChange={onFilterContact} value={filter} />
        <Contacts contacts={filtered} onDeleteContact={onDeleteContact} />
      </div>
    </div>
  );
};
