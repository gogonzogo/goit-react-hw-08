import { useState } from 'react';
import Box from '@mui/material/Box';
import StyledSpeedDial from '@mui/material/SpeedDial';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactsItemActions.module.css';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const actions = [
  { icon: <EditNoteIcon />, tooltip: 'Edit' },
  { icon: <SaveIcon />, tooltip: 'Save' },
  { icon: <CancelIcon />, tooltip: 'Cancel' },
  { icon: <DeleteForeverIcon />, tooltip: 'Delete' },
];

export default function ContactsItemActions({
  editableContactId,
  contactId,
  handleSaveClick,
  handleEditClick,
  handleCancelClick,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  return (
    <Box sx={{}}>
      <StyledSpeedDial
        sx={{ position: 'relative' }}
        ariaLabel="SpeedDial tooltip example"
        className={css.speedDial}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        direction="left"
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {editableContactId === contactId
          ? [
              <SpeedDialAction
                key="save"
                className={css.contactItemBtn}
                icon={actions[1].icon}
                tooltipTitle={actions[1].tooltip}
                onClick={() => {
                  handleSaveClick(contactId);
                }}
              />,
              <SpeedDialAction
                key="cancel"
                className={css.contactItemBtn}
                icon={actions[2].icon}
                tooltipTitle={actions[2].tooltip}
                onClick={() => {
                  handleCancelClick();
                }}
              />,
            ]
          : [
              <SpeedDialAction
                key="edit"
                className={css.contactItemBtn}
                icon={actions[0].icon}
                tooltipTitle={actions[0].tooltip}
                onClick={() => {
                  handleEditClick(contactId);
                }}
              />,
              <SpeedDialAction
                key="delete"
                className={css.contactItemBtn}
                icon={actions[3].icon}
                tooltipTitle={actions[3].tooltip}
                onClick={() => {
                  dispatch(deleteContact(contactId));
                }}
              />,
            ]}
      </StyledSpeedDial>
    </Box>
  );
}
