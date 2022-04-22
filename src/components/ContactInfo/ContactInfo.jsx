import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit, FaArrowLeft } from 'react-icons/fa';
import {
  Wrapper,
  GoBack,
  ImageWrapper,
  Photo,
  PersonalData,
  Name,
  Label,
  Phone,
  Email,
  LocalData,
  City,
  Company,
  ButtonWrapper,
  Button,
} from './ContactInfo.styled';
import { useNavigate } from 'react-router-dom';

function ContactInfo({
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

  const deleteContact = () => {
    onDeleteContact();
    navigate('/');
  };

  return (
    <Wrapper>
      <GoBack type="button" onClick={() => navigate('/')}>
        <FaArrowLeft />
      </GoBack>
      <ImageWrapper>
        <Photo src={photo} alt={name} />
      </ImageWrapper>
      <PersonalData>
        <Name>{name}</Name>
        <Phone>
          <Label>Phone: </Label>
          {phone}
        </Phone>
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
      <ButtonWrapper>
        <Button type="button" onClick={deleteContact}>
          {deleting ? '...' : <FaTrash />}
        </Button>
        <Button type="button">
          <FaUserEdit />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

ContactInfo.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string,
  company: PropTypes.string,
  photo: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
  deleting: PropTypes.bool.isRequired,
};

export default ContactInfo;
