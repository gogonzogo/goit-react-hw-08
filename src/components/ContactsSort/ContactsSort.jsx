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
import Tooltip from '@mui/material/Tooltip';

export function ContactsSort() {
  const [sortMethod, setSortMethod] = useState({
    name: 'firstName',
    order: 'asc',
  });
  const [sortOption, setSortOption] = useState('left');
  const [orderOption, setOrderOption] = useState('left');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortContacts(sortMethod));
  }, [sortMethod, dispatch]);

  const handleChange = e => {
    const target = e.target.closest('button').id;

    switch (target) {
      case 'firstName':
        setSortOption('left');
        setSortMethod(prevState => ({
          ...prevState,
          name: 'firstName',
        }));
        break;
      case 'lastName':
        setSortOption('right');
        setSortMethod(prevState => ({
          ...prevState,
          name: 'lastName',
        }));
        break;
      case 'asc':
        setOrderOption('left');
        setSortMethod(prevState => ({
          ...prevState,
          order: 'asc',
        }));
        break;
      case 'desc':
        setOrderOption('right');
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
      <h3>Sort Contacts</h3>
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
          value={sortOption}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
        >
          <ToggleButton id="firstName" value="left" aria-label="left aligned">
            <Tooltip title="First Name" placement="top">
              <FirstPageIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton id="lastName" value="right" aria-label="right aligned">
            <Tooltip title="Last Name" placement="top">
              <LastPageIcon />
            </Tooltip>
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
          value={orderOption}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
        >
          <ToggleButton id="asc" value="left" aria-label="left aligned">
            <Tooltip title="Ascending" placement="top">
              <TextRotationDownIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton id="desc" value="right" aria-label="right aligned">
            <Tooltip title="Descending" placement="top">
              <TextRotateUpIcon />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </Box>
  );
}
