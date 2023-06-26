import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { Sort } from 'components/Sort/Sort.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getContacts } from 'redux/contacts/contactsSelectors.js';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';

export const Contacts = () => {
  const [onMount, setOnMount] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(fetchContacts());
      setOnMount(false);
    }
    console.log('render')
  }, [dispatch, isLoggedIn]);

// set contacts to empty array on unmount
  useEffect(() => {
    return () => {
      setOnMount(true);
    };
  }, []);

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
