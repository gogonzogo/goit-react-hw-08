import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const JWT = localStorage.getItem('persist:auth')
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
axios.defaults.headers.common.Authorization = `Bearer ${JWT.token}`

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts', async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      throw error
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact', async (contact) => {
    console.log(contact)
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      throw error
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      throw error
    }
  }
)

export const updateContact = createAsyncThunk(
  'contacts/updateContact', async (contact) => {
    const { id, name, number } = contact.editedContact
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      throw error
    }
  }
)

