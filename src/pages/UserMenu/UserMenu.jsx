import css from './UserMenu.module.css';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { clearContacts } from 'redux/contacts/contactsSlice';
// import { useContacts } from 'hooks/useContacts';
import Button from '@mui/material/Button';


const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
    dispatch(clearContacts());
  };

  return (
    <div className={css.userMenu}>
      <h1 className={css.userMenuTitle}>{user.email}</h1>
      <Button
        variant="contained"
        size="large"
        onClick={handleClick}
        className="UserMenu__btn"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
