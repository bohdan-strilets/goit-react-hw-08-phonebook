import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from 'components/AppBar';
import NotFound from 'components/NotFound';

import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import AddContactPage from 'pages/AddContactPage';
import ChangeContactPage from 'pages/ChangeContactPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

import operations from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts/*" element={<ContactsPage />} />
        <Route path="/contacts/add" element={<AddContactPage />} />
        <Route
          path="/contacts/edit/:contactId"
          element={<ChangeContactPage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
