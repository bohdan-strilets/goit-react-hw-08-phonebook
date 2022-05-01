import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import AddContactPage from 'pages/AddContactPage';
import ContactInfoPage from 'pages/ContactInfoPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NotFound from 'components/NotFound';

function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contacts/add" element={<AddContactPage />} />
        <Route path="/contacts/:contactId/*" element={<ContactInfoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
