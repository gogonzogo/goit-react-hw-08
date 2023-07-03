import css from './ContactList.module.css';
import ContentEditable from 'react-contenteditable';
import DOMPurify from 'dompurify';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import {
  sortContactsList,
  filterContactsList,
  isNameOrNumEdited,
  isNameOrNumAvail,
} from 'services/contactListFunc';
import { Notify } from 'notiflix';
import { useContacts } from 'hooks/useContacts';
import { ContactsItemActions } from 'components/ContactsItemActions/ContactsItemActions';
import { Paper } from '@mui/material';
import { ProgressBar } from 'react-loader-spinner';
import Tooltip from '@mui/material/Tooltip';

export const ContactList = () => {
  const [editedContactNameSavedId, setEditedContactNameSavedId] =
    useState(null);
  const [editedContactNumberSavedId, setEditedContactNumberSavedId] =
    useState(null);
  const [editableContactId, setEditableContactId] = useState(null);
  const [editSaveError, setEditSaveError] = useState(false);
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
    editedContactsRef.current = {};
    setEditableContactId(null);
    setEditedContactNameSavedId(null);
    setEditedContactNumberSavedId(null);
  };

  const handleSaveClick = id => {
    if (
      editedContactsRef.current[id].name === '' ||
      editedContactsRef.current[id].number === '' ||
      editedContactsRef.current[id].name.length > 30 ||
      editedContactsRef.current[id].number.length > 25
    ) {
      Notify.failure(
        'Please check the name and number fields are completed correctly and resubmit'
      );
      setEditSaveError(true);
      return;
    }
    const contactsToCompare = contacts.filter(contact => contact.id !== id);
    const { isNameEdited, isNumberEdited } = isNameOrNumEdited(
      contacts,
      id,
      editedContactsRef
    );
    const { isNameAvail, isNumAvail } = isNameOrNumAvail(
      contactsToCompare,
      editedContactsRef,
      id
    );

    if (isNameAvail && isNumAvail) {
      Notify.failure(
        `${editedContactsRef.current[id].name} & ${
          editedContactsRef.current[id.number]
        } is already in contacts. Please check and resubmit`
      );
      setEditSaveError(true);
      return;
    } else if (isNumAvail && !isNameAvail) {
      Notify.failure(
        `${editedContactsRef.current[id].number} is already in contacts. Please check and resubmit`
      );
      setEditSaveError(true);
      return;
    } else if (!isNumAvail && isNameAvail) {
      Notify.failure(
        `${editedContactsRef.current[id].name} is already in contacts. Please check and resubmit`
      );
      setEditSaveError(true);
      return;
    } else {
      isNameEdited && setEditedContactNameSavedId(id);
      isNumberEdited && setEditedContactNumberSavedId(id);
      dispatch(
        updateContact({ editedContact: editedContactsRef.current[id] })
      ).then(() => {
        setEditedContactNumberSavedId(null);
        setEditedContactNameSavedId(null);
      });
      setEditableContactId(null);
      editedContactsRef.current = {};
      setEditSaveError(false);
    }
  };

  const handleContactChange = (e, id) => {
    const value = document.activeElement.innerText;
    const sanitizedValue = DOMPurify.sanitize(value);
    const trimmedValue = sanitizedValue.trim();
    const dataset = e.currentTarget.dataset.value;
    editedContactsRef.current[id][dataset] = trimmedValue;
  };

  const handlePaste = e => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    const sanitizedText = DOMPurify.sanitize(text);
    document.execCommand('insertText', false, sanitizedText);
  };

  const handleKeyPress = e => {
    if (e.which === 13) {
      e.preventDefault();
    }
  };

  return (
    <section className={css.contactsListSection}>
      <Paper elevation={6} sx={{ padding: '0 15px 15px 15px' }}>
        <ul className={css.contactList}>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <li key={contact.id} className={css.contactListItem}>
                <span className={css.contactName}>
                  {editableContactId === contact.id ? (
                    <Tooltip
                      title="Must be between 1 and 30 characters long"
                      placement="top"
                    >
                      <div>
                        <ContentEditable
                          className={css.editableContact}
                          html={contact.name}
                          disabled={false}
                          data-value="name"
                          onChange={e => handleContactChange(e, contact.id)}
                          onPaste={handlePaste}
                          onKeyDown={handleKeyPress}
                        />
                      </div>
                    </Tooltip>
                  ) : editedContactNameSavedId === contact.id ? (
                    <ProgressBar
                      height="60"
                      width="80"
                      ariaLabel="progress-bar-loading"
                      wrapperStyle={{}}
                      wrapperClass="progress-bar-wrapper"
                      borderColor="#007bff"
                      barColor="#007bff"
                    />
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: contact.name }} />
                  )}
                </span>
                <span className={css.contactNumber}>
                  {editableContactId === contact.id ? (
                    <Tooltip
                      title="Must be between 1 and 25 characters long"
                      placement="top"
                    >
                      <div>
                        <ContentEditable
                          className={css.editableContact}
                          html={contact.number}
                          disabled={false}
                          data-value="number"
                          onChange={e => handleContactChange(e, contact.id)}
                          onPaste={handlePaste}
                          onKeyDown={handleKeyPress}
                        />
                      </div>
                    </Tooltip>
                  ) : editedContactNumberSavedId === contact.id ? (
                    <>
                      <ProgressBar
                        height="60"
                        width="100%"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor="#007bff"
                        barColor="#007bff"
                      />
                    </>
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{ __html: contact.number }}
                    />
                  )}
                </span>
                <span className={css.contactAction}>
                  <ContactsItemActions
                    contactId={contact.id}
                    editableContactId={editableContactId}
                    editSaveError={editSaveError}
                    handleEditClick={handleEditClick}
                    handleCancelClick={handleCancelClick}
                    handleSaveClick={handleSaveClick}
                  />
                </span>
              </li>
            ))
          ) : (
            <li className={css.noContactsItem}>
              <p colSpan={3} className={css.noContactsText}>
                No contacts meet search criteria.
              </p>
            </li>
          )}
        </ul>
      </Paper>
    </section>
  );
};
