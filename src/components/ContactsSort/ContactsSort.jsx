import css from './ContactsSort.module.css';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';
import { sortContacts } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';

export function ContactsSort() {
  const [sortMethod, setSortMethod] = useState({
    name: 'firstName',
    order: 'asc',
  });
  const [optionAlignment, setOptionAlignment] = useState('left');
  const [orderAlignment, setOrderAlignment] = useState('left');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortContacts(sortMethod));
  }, [sortMethod, dispatch]);

  const handleChange = e => {
    const target = e.target.closest('button').id;

    switch (target) {
      case 'firstName':
        setOptionAlignment('left');
        setSortMethod(prevState => ({
          ...prevState,
          name: 'firstName',
        }));
        break;
      case 'lastName':
        setOptionAlignment('right');
        setSortMethod(prevState => ({
          ...prevState,
          name: 'lastName',
        }));
        break;
      case 'asc':
        setOrderAlignment('left');
        setSortMethod(prevState => ({
          ...prevState,
          order: 'asc',
        }));
        break;
      case 'desc':
        setOrderAlignment('right');
        setSortMethod(prevState => ({
          ...prevState,
          order: 'desc',
        }));
        break;
      default:
        break;
    }
  };

  return (
    <Box className={css.sortToggleSection}>
      <Paper
        className={css.sortToggleContainer}
        elevation={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={optionAlignment}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
        >
          <ToggleButton id="firstName" value="left" aria-label="left aligned">
            <FirstPageIcon />
          </ToggleButton>
          <ToggleButton id="lastName" value="right" aria-label="right aligned">
            <LastPageIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider
          variant="inset"
          flexItem
          orientation="vertical"
          sx={{ mx: 1, my: 0.5, color: '#007bff' }}
        />
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={orderAlignment}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
        >
          <ToggleButton id="asc" value="left" aria-label="left aligned">
            <TextRotationDownIcon />
          </ToggleButton>
          <ToggleButton id="desc" value="right" aria-label="right aligned">
            <TextRotateUpIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </Box>
  );
}
