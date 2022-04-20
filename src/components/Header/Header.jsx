import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts-slice';
import { Title, TitleColor, Button, ButtonText } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

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

  return (
    <>
      <Title>
        Phone<TitleColor>book</TitleColor>
      </Title>
      <Button type="button" onClick={toggleModal}>
        <ButtonText>Add new contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>

      {showModal && (
        <Modal onClose={toggleModal} title="Add contact">
          <ContactForm onSubmit={addNewContact} />
        </Modal>
      )}
    </>
  );
}

export default Header;
