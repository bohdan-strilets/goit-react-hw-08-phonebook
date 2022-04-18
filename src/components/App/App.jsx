import { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  changeFilter,
  getContacts,
  getFilter,
} from 'redux/contacts-slice';
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
import { nanoid } from 'nanoid';

function App() {
  const [showModal, setShowModal] = useState(false);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    const newElement = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : dispatch(addContact(newElement));

    toggleModal();
  };

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

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
          <ContactForm onSubmit={addNewContact} />
        </Modal>
      )}
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filter} changeFilter={changeFieldFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filtredContacts()}
          onDeleteContact={deleteSelectedContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </Container>
  );
}

export default App;
