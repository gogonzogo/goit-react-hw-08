import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
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

export function ContactsItemActions({
  editableContactId,
  contactId,
  editSaveError,
  handleSaveClick,
  handleEditClick,
  handleCancelClick,
}) {
  const [open, setOpen] = useState(false);
  const [actionClicked, setActionClicked] = useState(false);
  const dispatch = useDispatch();
  const errorRef = useRef(null);

  const handleActionEvent = e => {
    try {
      if (e.type === 'mouseleave' && actionClicked) {
        return;
      } else if (e.type === 'mouseleave' && !actionClicked) {
        setOpen(false);
        return;
      } else if (e.type === 'mouseenter') {
        setOpen(true);
        return;
      } else if (e.type === 'click') {
        const target = e.target.closest('svg').dataset.testid;
        switch (target) {
          case 'EditIcon':
            setOpen(true);
            setActionClicked(true);
            break;
          case 'AddIcon':
            setOpen(false);
            setActionClicked(false);
            break;
          case 'SaveIcon':
            setOpen(false);
            setActionClicked(false);
            break;
          case 'CancelIcon':
            setOpen(false);
            setActionClicked(false);
            break;
          case 'DeleteIcon':
            setOpen(false);
            setActionClicked(false);
            break;
          case 'EditNoteIcon':
            setOpen(true);
            setActionClicked(true);
            break;
          default:
            return;
        }
      }
    } catch (error) {
      errorRef.current = error;
    }
  };


  return (
    <Box sx={{}}>
      <StyledSpeedDial
        sx={{ position: 'relative' }}
        ariaLabel="SpeedDial tooltip example"
        id="speedDial"
        className={css.speedDial}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        direction="left"
        onOpen={handleActionEvent}
        onClose={handleActionEvent}
        onClick={handleActionEvent}
        open={open}
      >
        {editableContactId === contactId
          ? [
              <SpeedDialAction
                key="save"
                id="save"
                className={css.contactItemBtn}
                icon={actions[1].icon}
                tooltipTitle={actions[1].tooltip}
                onClick={() => {
                  handleSaveClick(contactId);
                }}
              />,
              <SpeedDialAction
                key="cancel"
                id="cancel"
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
                id="edit"
                className={css.contactItemBtn}
                icon={actions[0].icon}
                tooltipTitle={actions[0].tooltip}
                onClick={() => {
                  handleEditClick(contactId);
                }}
              />,
              <SpeedDialAction
                key="delete"
                id="delete"
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

ContactsItemActions.propTypes = {
  editableContactId: PropTypes.string,
  contactId: PropTypes.string.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};
