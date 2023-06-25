import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from '../auth/authSelectors'

// const JWT = localStorage.getItem('persist:auth')
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
// axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(JWT).token}`

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts', async (_, { getState, rejectWithValue }) => {
    
    try {
      const token = selectToken(getState());
      console.log(token)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact', async (contact, rejectWithValue) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (id, rejectWithValue) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updateContact = createAsyncThunk(
  'contacts/updateContact', async (contact, rejectWithValue) => {
    const { id, name, number } = contact.editedContact
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

