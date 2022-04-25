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
import Modal from 'components/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact';

function Contact({ id, name, phone, email, city, company, photo }) {
  const { showModal, togleModal } = useShowModal(false);

  const navigate = useNavigate();
  const openEditPage = () => navigate(`/contacts/${id}/edit`);

  return (
    <>
      {showModal && (
        <Modal onClose={togleModal} title={name}>
          <DeletingContact id={id} name={name} togleModal={togleModal} />
        </Modal>
      )}

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
          <Button type="button" onClick={togleModal}>
            <FaTrash />
          </Button>
          <Button type="button" onClick={openEditPage}>
            <FaUserEdit />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string,
  company: PropTypes.string,
  photo: PropTypes.string,
};

export default Contact;
