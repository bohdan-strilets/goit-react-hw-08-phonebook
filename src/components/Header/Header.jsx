import { useState } from 'react';
import { Title, TitleColor, Button, ButtonText } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

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
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default Header;
