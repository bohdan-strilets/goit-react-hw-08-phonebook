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
  EditButton,
} from './ContactInfo.styled';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import ChangeContactPage from 'pages/ChangeContactPage';
import {
  useGetContactByidQuery,
  useDeleteContactMutation,
} from 'redux/contact-api';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function ContactInfo() {
  const navigate = useNavigate();
  const { contactId } = useParams();

  const {
    data: contact,
    isFetching,
    error,
  } = useGetContactByidQuery(contactId);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(contactId);
    navigate('/');
    Notify.success(
      `The ${contact.name} has been removed from your contact list.`,
    );
  };

  return (
    <>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contact && (
        <Wrapper>
          <GoBack type="button" onClick={() => navigate('/')}>
            <FaArrowLeft />
          </GoBack>
          <ImageWrapper>
            <Photo src={contact.photo} alt={contact.name} />
          </ImageWrapper>
          <PersonalData>
            <Name>{contact.name}</Name>
            <Phone>
              <Label>Phone: </Label>
              {contact.phone}
            </Phone>
            <Email>
              <Label>Email: </Label>
              {contact.email}
            </Email>
          </PersonalData>
          <LocalData>
            <City>
              <Label>City: </Label>
              {contact.city}
            </City>
            <Company>
              <Label>Company: </Label>
              {contact.company}
            </Company>
          </LocalData>
          <ButtonWrapper>
            <Button type="button" onClick={deleteSelectedContact}>
              {isDeleting ? '...' : <FaTrash />}
            </Button>
            <EditButton to="edit" type="button">
              <FaUserEdit />
            </EditButton>
          </ButtonWrapper>
        </Wrapper>
      )}

      <Routes>
        <Route path="edit" element={<ChangeContactPage />} />
      </Routes>
    </>
  );
}

export default ContactInfo;
