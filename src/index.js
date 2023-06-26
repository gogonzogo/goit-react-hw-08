import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { Notify } from 'notiflix';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode >
  </StyledEngineProvider>
);


Notify.init({
  position: 'center-center',
  distance: '15px',
  timeout: 1000,
  showOnlyTheLastOne: true,
  fontSize: '20px',
});