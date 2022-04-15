import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { Wrapper, Icon, Number, Button } from './Contact.styled';

function Contact({ name, number, onDeleteContact }) {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{number}</Number>
        <Button type="button" onClick={onDeleteContact}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
