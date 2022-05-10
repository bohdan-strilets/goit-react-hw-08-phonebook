import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit, FaStar } from 'react-icons/fa';
import {
  NameWrapper,
  Wrapper,
  IconUser,
  Name,
  NumberWrapper,
  Number,
  ButtonList,
  ButtonItem,
  Button,
} from './Contact.styled';
import Modal from 'components/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact';
import { useNavigate } from 'react-router-dom';
import { toggleFavorites } from 'redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from 'redux/contacts/contact-selectors';
import { useState, useEffect } from 'react';

function Contact({ id, name, number }) {
  const [isFavorites, setIsFavorites] = useState(false);

  const { showModal, togleModal } = useShowModal(false);
  const { favorites } = useSelector(state => getFavoritesList(state));

  useEffect(() => {
    setIsFavorites(favorites.some(contact => contact.id === id));
  }, [favorites, id]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addContactToFavorite = () => {
    const favoriteContact = { id, name, number };

    dispatch(toggleFavorites(favoriteContact));
  };

  return (
    <>
      {showModal && (
        <Modal onClose={togleModal} title={name}>
          <DeletingContact id={id} name={name} togleModal={togleModal} />
        </Modal>
      )}

      <Wrapper>
        <NameWrapper>
          <IconUser />
          <Name>{name}</Name>
        </NameWrapper>
        <NumberWrapper>
          <ButtonList>
            <Number>{number}</Number>
            <ButtonItem>
              <Button type="button" onClick={togleModal}>
                <FaTrash />
              </Button>
            </ButtonItem>
            <ButtonItem>
              <Button type="button" onClick={() => navigate(`edit/${id}`)}>
                <FaUserEdit />
              </Button>
            </ButtonItem>
            <ButtonItem>
              <Button type="button" onClick={addContactToFavorite}>
                <FaStar color={isFavorites ? '#f0a70a' : '#0084ff'} />
              </Button>
            </ButtonItem>
          </ButtonList>
        </NumberWrapper>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
