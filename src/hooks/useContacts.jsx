import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getSortOptions,
  getError,
  getIsLoading,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const sortOptions = useSelector(getSortOptions);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return {
    contacts,
    filter,
    sortOptions,
    error,
    isLoading,
  };
};
