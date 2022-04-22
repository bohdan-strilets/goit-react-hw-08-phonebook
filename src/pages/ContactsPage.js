import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';

function ContactsPage() {
  return (
    <Container title="Contacts">
      <Filter />
      <ContactList />
      <Message />
    </Container>
  );
}

export default ContactsPage;
