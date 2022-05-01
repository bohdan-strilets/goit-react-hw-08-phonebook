import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import ContactsPage from 'pages/ContactsPage';
import AddContactPage from 'pages/AddContactPage';
import ContactInfoPage from 'pages/ContactInfoPage';

import HomePage from 'pages/HomePage';

function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts/add" element={<AddContactPage />} />
        <Route path="/contacts/:contactId/*" element={<ContactInfoPage />} />
        <Route path="*" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
