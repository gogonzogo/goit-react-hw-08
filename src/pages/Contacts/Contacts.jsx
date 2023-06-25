import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { Sort } from 'components/Sort/Sort.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations.js';
import { getContacts } from 'redux/contacts/contactsSelectors.js';

export const Contacts = () => {
  const [onMount, setOnMount] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    setOnMount(false);
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  return (
    <section className={css.contacts}>
      <h1 className={css.contactsTitle}>Phonebook</h1>
      <ContactForm />
      {onMount ? (
        <h5>Loading...</h5>
      ) : contacts.length >= 2 ? (
        <>
          <Filter />
          <Sort />
          <ContactList />
        </>
      ) : contacts.length === 1 ? (
        <ContactList />
      ) : contacts.length < 1 ? (
        <h5>
          No contacts found. Complete the above form to begin adding contacts.
        </h5>
      ) : null}
    </section>
  );
};

export default Contacts;
