import {
  Text,
  Name,
  List,
  Item,
  ButtonCancel,
  ButtonDelete,
} from './DeletingContact.styled';
import { useDeleteContactMutation } from 'redux/contact-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function DeletingContact({ id, name, togleModal }) {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    navigate('/');
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return (
    <>
      <Text>
        Are you sure you want to delete a contact <Name>{name}</Name>?
      </Text>
      <List>
        <Item>
          <ButtonCancel type="button" onClick={togleModal}>
            Cancel
          </ButtonCancel>
        </Item>
        <Item>
          <ButtonDelete type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </ButtonDelete>
        </Item>
      </List>
    </>
  );
}

DeletingContact.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  togleModal: PropTypes.func.isRequired,
};

export default DeletingContact;
