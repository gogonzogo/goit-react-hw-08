import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { Sort } from 'components/Sort/Sort.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks/useContacts';
import { useAuth } from 'hooks/useAuth';

export const Contacts = () => {
  const [onMount, setOnMount] = useState(true);
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();
  const { isLoggedIn, user, isRefreshing } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(fetchContacts());
      setOnMount(false);
    }
  }, [dispatch, isLoggedIn]);

  return (
    <section className={css.contacts}>
      <h1 className={css.contactsTitle}>{`${user.name} Contacts`}</h1>
      <ContactForm />
      {isLoading && <h5>Loading...</h5>}
      { contacts.length >= 2 ? (
        <>
          <Filter />
          <Sort />
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
