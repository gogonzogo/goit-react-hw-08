import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './contactsOperations';


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  sortOptions: { name: 'firstName', order: 'asc' },
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    sortContacts: (state, action) => {
      state.sortOptions = action.payload
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
    clearContacts: (state) => {
      state.contacts.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        state.contacts.items = [];
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(updateContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const { id, name, number } = action.payload;
        const contact = state.contacts.items.find(contact => contact.id === id);
        contact.name = name;
        contact.number = number;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
  }
})

export const { sortContacts, filterContacts, clearContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;