import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contact-api';

function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <Filter />
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </Container>
  );
}

export default ContactsPage;
