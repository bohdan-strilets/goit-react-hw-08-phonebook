import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
