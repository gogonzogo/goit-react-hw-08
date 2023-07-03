import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export function ContactsFilter() {
   const [state, setState] = useState({
     input: '',
   });
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(filterContacts(state.input));
   }, [state.input, dispatch]);

   const onChange = e => {
     setState(prevState => ({
       ...prevState,
       input: e.target.value,
     }));
   };
  
  return (
    <Box sx={{ width: '100%', marginTop: "20px" }}>
      <TextField
        label="Filter by Name or Number"
        id="outlined-start-adornment"
        sx={{ width: '100%' }}

        onChange={onChange}
        value={state.input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FilterAltIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
