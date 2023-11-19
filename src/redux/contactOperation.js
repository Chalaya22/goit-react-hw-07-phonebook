import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6557ec6bbd4bcef8b6134081.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addСontact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteСontact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
