import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },
  filter: '',
  sortOptions: { name: false, order: false },
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
        console.log(action.payload)
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
        const contacts = state.contacts.items.filter(contact => contact.id !== action.payload.id);
        const { id, name, number } = action.payload;

        const existingContact = contacts.find(
          contact =>
            contact.name.toLowerCase() === name.toLowerCase() ||
            contact.number === number
        );
        if (existingContact) {
          alert(`${name} or ${number} is already in contacts`);
          return;
        }
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