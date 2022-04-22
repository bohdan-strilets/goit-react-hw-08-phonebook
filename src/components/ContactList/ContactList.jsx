import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { List, Item } from './ContactList.styled';
import Loader from 'components/Loader';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contact-api';

function ContactList() {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const { filter } = useSelector(state => state.filter);

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <List>
      {isFetching && <Loader />}
      {contacts &&
        filteredContactList.map(
          ({ id, name, phone, email, city, company, photo }) => {
            return (
              <Item key={id}>
                <Contact
                  id={id}
                  name={name}
                  phone={phone}
                  email={email}
                  city={city}
                  company={company}
                  photo={photo}
                  onDeleteContact={() => deleteContact(id)}
                  deleting={isDeleting}
                />
              </Item>
            );
          },
        )}
    </List>
  );
}

export default ContactList;
