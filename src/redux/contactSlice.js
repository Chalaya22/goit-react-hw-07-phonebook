import { createSlice } from '@reduxjs/toolkit';
import { contactsItems, saveContact, deleteContact } from './contactOperation';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      const { name } = action.payload;
      if (state.contacts.some(contact => contact.name === name)) {
        return alert(`${name} is already in contacts`);
      }
      state.contacts.push(action.payload);
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;