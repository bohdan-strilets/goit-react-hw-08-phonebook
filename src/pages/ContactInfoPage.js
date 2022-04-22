import { useParams } from 'react-router-dom';
import {
  useGetContactByidQuery,
  useDeleteContactMutation,
} from 'redux/contact-api';
import Container from 'components/Container';
import ContactInfo from 'components/ContactInfo';

function ContactInfoPage() {
  const { contactId } = useParams();

  const { data: contact } = useGetContactByidQuery(contactId);

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Container>
      {contact && (
        <ContactInfo
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          city={contact.city}
          company={contact.company}
          photo={contact.photo}
          onDeleteContact={() => deleteContact(contactId)}
          deleting={isDeleting}
        />
      )}
    </Container>
  );
}

export default ContactInfoPage;
