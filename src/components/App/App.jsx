import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from 'components/AppBar';
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

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
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts/*"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts/add"
          element={
            <PublicRoute>
              <AddContactPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts/edit/:contactId"
          element={
            <PublicRoute>
              <ChangeContactPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
