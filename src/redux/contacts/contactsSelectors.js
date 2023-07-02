export const getContacts = state => state.contacts.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getSortOptions = state => state.contacts.sortOptions;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getPhonebookOptions = state => state.contacts.phonebookOptions;