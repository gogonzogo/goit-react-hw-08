import { ContactsForm } from 'components/ContactsForm/ContactsForm.jsx';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.jsx';
import { ContactsSort } from 'components/ContactsSort/ContactsSort.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks/useContacts';
import { useAuth } from 'hooks/useAuth';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <section className={css.phonebook}>
      {!isLoading && (
        <h1 className={css.contactsTitle}>{`${user.name} Contacts`}</h1>
      )}
      <ContactsForm />
      {isLoading && <h5>Loading...</h5>}
      {contacts.length >= 2 ? (
        <>
          <ContactsFilter />
          <ContactsSort />
          <ContactList />
        </>
      ) : contacts.length === 1 ? (
        <ContactList />
      ) : contacts.length < 1 && !isLoading ? (
        <h5>
          No contacts found. Complete the above form to begin adding contacts.
        </h5>
      ) : null}
    </section>
  );
};

export default Contacts;
