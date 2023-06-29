import css from './ContactsForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks/useContacts';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import DialpadIcon from '@mui/icons-material/Dialpad';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Notify } from 'notiflix';

export function ContactsForm() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handleClick = e => {
    e.preventDefault();
    setLoading(true);
    const { name, number } = state;
    const newContact = {
      name,
      number,
    };

    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      Notify.warning(`${name} or ${number} is already in contacts`);
      setLoading(false);
      return;
    } else if (!name || !number) {
      Notify.failure('Please fill out all fields');
      setLoading(false);
      return;
    } else {
      dispatch(addContact(newContact)).then(() => setLoading(false));
      setState({ name: '', number: '' });
    }
  };

  const handleChange = e => {
    const trimmedValue = e.target.value
      .split(' ')
      .map(str => str.trim())
      .join(' ');

    setState(prevState => ({
      ...prevState,
      [e.target.name]: trimmedValue,
    }));
  };

  return (
    <Box>
      <Box className={css.inputBox}>
        <TextField
          className={css.input}
          name="name"
          label="Contact Name"
          onChange={handleChange}
          value={state.name}
          type="text"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          className={css.input}
          name="number"
          label="Contact Number"
          onChange={handleChange}
          value={state.number}
          type="tel"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DialpadIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <LoadingButton
          className={css.addContactButton}
          onClick={handleClick}
          loading={loading}
          loadingPosition="center"
          startIcon={<SaveIcon />}
          variant="contained"
          type="submit"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}
