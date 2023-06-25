import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import Paper from '@mui/material/Paper';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const UserMenu = lazy(() => import('pages/UserMenu/UserMenu'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            maxWidth: '500px',
            maxHeight: '100vh',
            margin: '40px auto',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/usermenu"
              element={
                <PrivateRoute redirectTo="/login" component={<UserMenu />} />
              }
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Paper>
      </Suspense>
    </>
  );
};

export default App;
