import css from './Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateValidationReqs,
  clearValidationReqs,
} from 'redux/validation/validationSlice';
import { login } from 'redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import ValidationPopup from 'components/ValidationPopup/ValidationPopup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [focusedField, setFocusedField] = useState('');
  const dispatch = useDispatch();
  const validationReqs = useSelector(state => state.validation.validationReqs);
  const navigate = useNavigate();

  const handleChange = e => {
    const targetField = e.target.id;
    const value = e.target.value;
    setFormData(prevState => ({ ...prevState, [targetField]: value }));
    dispatch(updateValidationReqs({ [e.target.id]: e.target.value }));
  };

  const handleFocus = e => {
    const targetField = e.target.id;
    setFocusedField(targetField);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userEmail = Object.values(validationReqs.email);
    const userPassword = Object.values(validationReqs.password);
    const isEmailValid = userEmail.map(el =>
      Object.values(el).every(el => el.met === true)
    );
    const isPasswordValid = userPassword.map(el =>
      Object.values(el).every(el => el.met === true)
    );

    if (!email || !password) {
      Notify.warning('Please fill in all the fields');
      return;
    } else if (!isEmailValid || !isPasswordValid) {
      Notify.warning('Please correct the fields with errors');
      return;
    } else {
      Notify.success('Success! Logging you in...');
      setFormData({ email: '', password: '' });
      dispatch(clearValidationReqs());
      dispatch(login({ email, password }));
      navigate('/contacts');
    }
  };

  Notify.init({
    position: 'center-center',
    distance: '15px',
    timeout: 1000,
    showOnlyTheLastOne: true,
    fontSize: '20px',
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <section className={css.loginSection}>
      <form className={css.loginForm}>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
          size="large"
          value={email}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{ marginTop: '20px' }}
        />
        {focusedField === 'email' && (
          <ValidationPopup validationData={validationReqs.email} />
        )}
        <FormControl
          sx={{ width: '100%', marginTop: '20px' }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="off"
            value={password}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {focusedField === 'password' && (
          <ValidationPopup validationData={validationReqs.password} />
        )}
        <Button
          sx={{ marginTop: '40px' }}
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </form>
    </section>
  );
};

export default Login;
