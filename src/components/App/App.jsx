import { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts-actions';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Message from 'components/Message';
import Modal from 'components/Modal';
import {
  Container,
  Title,
  TitleColor,
  Subtitle,
  Button,
  ButtonText,
} from './App.styled';

function App() {
  const [showModal, setShowModal] = useState(false);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : dispatch(contactsActions.addContact(name, number));

    toggleModal();
  };

  const deleteContact = contactId =>
    dispatch(contactsActions.deleteContact(contactId));

  const changeFilter = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <Container>
      <Title>
        Phone<TitleColor>book</TitleColor>{' '}
      </Title>
      <Button type="button" onClick={toggleModal}>
        <ButtonText>Add new contact</ButtonText>{' '}
        <BsFillPersonPlusFill size={20} />
      </Button>
      {showModal && (
        <Modal onClose={toggleModal} title="Add contact">
          <ContactForm onSubmit={addContact} />
        </Modal>
      )}
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filter} changeFilter={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filtredContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </Container>
  );
}

export default App;
