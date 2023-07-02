import css from './Register.module.css';
import { useState } from 'react';
import ValidationPopup from 'components/ValidationPopup/ValidationPopup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  updateValidationReqs,
  clearValidationReqs,
  updateFormData,
  clearFormData,
} from 'redux/validation/validationSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
import { register } from 'redux/auth/authOperations';
import { useValidation } from 'hooks/useValidation';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const dispatch = useDispatch();
  const { validationReqs } = useValidation();
  const navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();
    const targetField = e.target.id;
    const value = e.target.value;
    setFormData(prevState => ({ ...prevState, [targetField]: value }));
    dispatch(updateFormData({ [targetField]: value }));
    dispatch(updateValidationReqs({ [e.target.id]: e.target.value }));
  };

  const handleFocus = e => {
    const targetField = e.target.id;
    setFocusedField(targetField);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const handleClick = e => {
    e.preventDefault();
    const isValid = Object.values(validationReqs).every(fieldReqs =>
      fieldReqs.every(req => req[Object.keys(req)[0]].met)
    );

    if (!name || !email || !password) {
      Notify.warning('Please fill in all the fields');
      return;
    } else if (!isValid) {
      Notify.warning('Please check fields with errors');
    } else {
      dispatch(register({ name, email, password }))
        .then(action => {
          if (!action.error) {
            dispatch(clearValidationReqs());
            dispatch(clearFormData());
            navigate('/contacts');
          } 
        })
        .catch(() => {
          Notify.failure('Registration failure');
        });
    }
  };

  Notify.init({
    position: 'center-center',
    distance: '15px',
    timeout: 1000,
    showOnlyTheLastOne: true,
    fontSize: '20px',
  });

  return (
    <section className={css.registerSection}>
      <form className={css.registerForm}>
        <TextField
          sx={{ marginTop: '20px' }}
          id="name"
          label="Name"
          variant="standard"
          fullWidth
          size="large"
          value={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {focusedField === 'name' && (
          <ValidationPopup validationData={validationReqs.name} />
        )}
        <TextField
          sx={{ marginTop: '20px' }}
          id="email"
          label="Email"
          variant="standard"
          fullWidth
          size="small"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
        <FormControl
          sx={{ width: '100%', marginTop: '20px' }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            id="password2"
            type={showPassword ? 'text' : 'password'}
            autoComplete="off"
            value={password2}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
        {focusedField === 'password2' && (
          <ValidationPopup validationData={validationReqs.password2} />
        )}
        <Button
          sx={{ marginTop: '40px' }}
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleClick}
        >
          REGISTER
        </Button>
      </form>
    </section>
  );
};

export default Register;
