import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const ContactsInitialState = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;

export const selectContact = state => state.contacts.contacts;

export const contactsReducer = contactsSlice.reducer;
