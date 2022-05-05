import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import AddButton from 'components/AddButton';

function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <AddButton />
      <Filter />
      {data && data.length > 0 ? <ContactList /> : <Message />}
    </Container>
  );
}

export default ContactsPage;
