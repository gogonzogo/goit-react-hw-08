import css from './PhonebookActions.module.css';
import { useRef, useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SortIcon from '@mui/icons-material/Sort';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import Tooltip from '@mui/material/Tooltip';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { updatePhonebookOptions } from 'redux/contacts/contactsSlice';

export function PhonebookActions() {
  const [activeButton, setActiveButton] = useState(() => []);
  const dispatch = useDispatch();
  const { phonebookOptions } = useContacts();
  const errorRef = useRef(null);

  const handleChange = (e, newActiveButton) => {
    setActiveButton(newActiveButton);
    const target = e.target.closest('button').id;

    try {
      switch (target) {
        case 'add':
          dispatch(
            updatePhonebookOptions({
              ...phonebookOptions,
              addContact: !phonebookOptions.addContact,
            })
          );
          break;
        case 'sort':
          dispatch(
            updatePhonebookOptions({
              ...phonebookOptions,
              sortContacts: !phonebookOptions.sortContacts,
            })
          );
          break;
        case 'filter':
          dispatch(
            updatePhonebookOptions({
              ...phonebookOptions,
              filterContacts: !phonebookOptions.filterContacts,
            })
          );
          break;
        default:
          return;
      }
    } catch (error) {
      errorRef.current = error;
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Paper
        className={css.phonebookToggleContainer}
        elevation={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 'fit-content',
        }}
      >
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={activeButton}
          onChange={handleChange}
          aria-label="phonebook actions"
        >
          <ToggleButton id="add" value="add contact" aria-label="add contact">
            <Tooltip title="Add Contact" placement="top">
              <PersonAddAlt1Icon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton
            id="sort"
            value="sort contacts"
            aria-label="sort contacts"
          >
            <Tooltip title="Sort Contact" placement="top">
              <SortIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton
            id="filter"
            value="filter contacts"
            aria-label="filter contacts"
          >
            <Tooltip title="Filter Contact" placement="top">
              <ReduceCapacityIcon />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </Box>
  );
}
