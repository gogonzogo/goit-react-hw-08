import { ContactsForm } from 'components/ContactsForm/ContactsForm.jsx';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.jsx';
import { ContactsSort } from 'components/ContactsSort/ContactsSort.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks/useContacts';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';
import { PhonebookActions } from 'components/PhonebookActions/PhonebookActions';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [onMount, setOnMount] = useState(true);
  const { contacts, phonebookOptions } = useContacts();
  const { isLoggedIn, user } = useAuth();
  const { addContact, sortContacts, filterContacts } = phonebookOptions;

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(fetchContacts()).then(() => setOnMount(false));
    }
  }, [dispatch, isLoggedIn]);

  return (
    <section className={css.phonebook}>
      <h1 className={css.contactsTitle}>{`${user.name} Contacts`}</h1>

      {onMount && <Loader />}
      {contacts.length >= 2 && !onMount ? (
        <>
          <PhonebookActions />
          {addContact && <ContactsForm />}
          {filterContacts && <ContactsFilter />}
          {sortContacts && <ContactsSort />}
          <ContactList />
        </>
      ) : contacts.length === 1 && !onMount ? (
        <>
          <ContactsForm />
          <ContactList />
        </>
      ) : contacts.length < 1 && !onMount ? (
        <>
          <ContactsForm />
          <h5 className={css.noContactsText}>
            No contacts found. Complete the above form to begin adding contacts.
          </h5>
        </>
      ) : null}
    </section>
  );
};

export default Contacts;
