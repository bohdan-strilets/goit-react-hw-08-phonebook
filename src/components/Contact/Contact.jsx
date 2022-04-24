import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  Wrapper,
  StyledLink,
  ImageWrapper,
  Photo,
  PersonalData,
  Name,
  Number,
  Label,
  Email,
  LocalData,
  City,
  Company,
  ButtonWrapper,
  Button,
} from './Contact.styled';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function Contact({
  id,
  name,
  phone,
  email,
  city,
  company,
  photo,
  onDeleteContact,
  deleting,
}) {
  const navigate = useNavigate();
  const openEditPage = () => navigate(`/contacts/${id}/edit`);

  const deleteContact = () => {
    onDeleteContact();
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return (
    <Wrapper>
      <StyledLink to={`/contacts/${id}`}>
        <ImageWrapper>
          <Photo src={photo} alt={name} />
        </ImageWrapper>
        <PersonalData>
          <Name>{name}</Name>
          <Number>
            <Label>Phone: </Label>
            {phone}
          </Number>
          <Email>
            <Label>Email: </Label>
            {email}
          </Email>
        </PersonalData>
        <LocalData>
          <City>
            <Label>City: </Label>
            {city}
          </City>
          <Company>
            <Label>Company: </Label>
            {company}
          </Company>
        </LocalData>
      </StyledLink>
      <ButtonWrapper>
        <Button type="button" onClick={deleteContact}>
          {deleting ? '...' : <FaTrash />}
        </Button>
        <Button type="button" onClick={openEditPage}>
          <FaUserEdit />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string,
  company: PropTypes.string,
  photo: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
  deleting: PropTypes.bool.isRequired,
};

export default Contact;
