import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import FaceIcon from '@mui/icons-material/Face';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const loggedInIcon = isLoggedIn ? <MenuIcon /> : <LockIcon />;
  const loggedInLabel = isLoggedIn ? 'User Menu' : 'Login';
  const loggedInTo = isLoggedIn ? 'usermenu' : 'login';

  return (
    <nav className={css.navigation}>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            component={NavLink}
            to={'/'}
            label="Home"
            icon={<HomeIcon />}
          />
          {!isLoggedIn && (
            <BottomNavigationAction
              component={NavLink}
              to={'register'}
              label="Register"
              icon={<FaceIcon />}
            />
          )}
          <BottomNavigationAction
            component={NavLink}
            to={loggedInTo}
            label={loggedInLabel}
            icon={loggedInIcon}
          />
          <BottomNavigationAction
            component={NavLink}
            to={'contacts'}
            label="Contacts"
            icon={<ContactsIcon />}
          />
        </BottomNavigation>
      </Box>
    </nav>
  );
};

export default Navigation;
