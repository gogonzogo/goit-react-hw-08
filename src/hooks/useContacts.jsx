import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getSortOptions,
  getError,
  getIsLoading,
  getPhonebookOptions,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const sortOptions = useSelector(getSortOptions);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const phonebookOptions = useSelector(getPhonebookOptions);

  return {
    contacts,
    filter,
    sortOptions,
    error,
    isLoading,
    phonebookOptions,
  };
};
