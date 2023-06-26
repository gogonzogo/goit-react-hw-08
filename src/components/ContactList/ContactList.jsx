import css from './ContactList.module.css';
import ContentEditable from 'react-contenteditable';
// import sanitize from 'sanitize-html';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { sortContactsList, filterContactsList } from 'services/contactListFunc';
import { Buttons } from 'components/Buttons/Buttons';
import { Notify } from 'notiflix';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
  const [editableContactId, setEditableContactId] = useState(null);
  const editedContactsRef = useRef({});
  const dispatch = useDispatch();
  const { contacts, filter, sortOptions } = useContacts();
  const sortedContacts = sortContactsList(contacts, sortOptions);
  const filteredContacts = filterContactsList(sortedContacts, filter);

  const handleEditClick = id => {
    setEditableContactId(id);
    editedContactsRef.current[id] = {
      ...contacts.find(contact => contact.id === id),
    };
  };

  const handleCancelClick = () => {
    setEditableContactId(null);
    editedContactsRef.current = {};
  };

  const handleSaveClick = id => {
    const contactsToCompare = contacts.filter(contact => contact.id !== id);

    const existingContact = contactsToCompare.find(
      contact =>
        contact.name.toLowerCase() ===
          editedContactsRef.current[id].name.toLowerCase() ||
        contact.number === editedContactsRef.current[id].number
    );

    if (existingContact) {
      Notify.failure(
        `${editedContactsRef.current[id].name} is already in contacts. Please check and resubmit`
      );
      return;
    } else {
      dispatch(updateContact({ editedContact: editedContactsRef.current[id] }));
      setEditableContactId(null);
      editedContactsRef.current = {};
    }
  };

  const handleContactChange = (e, id) => {
    const value = e.target.value;
    const dataset = e.currentTarget.dataset.value;
    // const sanitizedValue = sanitize(value);
    editedContactsRef.current[id][dataset] = value;
  };

  return (
    <section className={css.contactsListSection}>
      <table className={css.contactsTable}>
        <thead>
          <tr>
            <th colSpan={3}>
              <h1>Contacts</h1>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length > 0 ? (
            <>
              {filteredContacts.map(contact => (
                <tr key={contact.id}>
                  <td>
                    {' '}
                    {editableContactId === contact.id ? (
                      <ContentEditable
                        className={css.editableContact}
                        html={contact.name}
                        disabled={false}
                        data-value="name"
                        onChange={e => handleContactChange(e, contact.id)}
                      />
                    ) : (
                      contact.name
                    )}
                  </td>
                  <td>
                    {editableContactId === contact.id ? (
                      <ContentEditable
                        className={css.editableContact}
                        html={contact.number}
                        disabled={false}
                        data-value="number"
                        onChange={e => handleContactChange(e, contact.id)}
                      />
                    ) : (
                      contact.number
                    )}
                  </td>
                  <td>
                    <Buttons
                      contactId={contact.id}
                      editableContactId={editableContactId}
                      handleEditClick={handleEditClick}
                      handleCancelClick={handleCancelClick}
                      handleSaveClick={handleSaveClick}
                    />
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan={3} className={css.noContacts}>
                No contacts meet search criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};
