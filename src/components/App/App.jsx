import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import Container from 'components/Container';
import Header from 'components/Header';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Message from 'components/Message';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message />}
      </Container>
    </>
  );
}

export default App;
