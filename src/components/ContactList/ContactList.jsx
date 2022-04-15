import PropTypes from 'prop-types';
import Contact from '../Contact';
import { Item } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
              contactId={id}
            />
          </Item>
        );
      })}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
