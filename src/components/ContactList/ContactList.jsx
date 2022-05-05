import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { List, Item } from './ContactList.styled';
import Loader from 'components/Loader';
import { useGetContactsQuery } from 'redux/contacts/contact-api';
import NotFound from 'components/NotFound';
import { getFilter } from 'redux/contacts/contact-selectors';

function ContactList() {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

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
      {error && <NotFound data={error.data} status={error.status} />}
      {contacts &&
        filteredContactList.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Contact id={id} name={name} number={number} />
            </Item>
          );
        })}
    </List>
  );
}

export default ContactList;
