import { Formik, Form, ErrorMessage } from 'formik';
import {
  MainTitle,
  Label,
  Title,
  StyledField,
  Button,
} from './ChangeContactForm.styled';
import {
  useChangeContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contact-api';
import { useParams, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function ChangeContactForm() {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [chengeContact, { isLoading: isUpdating }] = useChangeContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const currentContact = contacts.find(contact => contact.id === contactId);

  const onSubmitForm = values => {
    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      Notify.warning('Try to change something first.');
      return;
    }
    chengeContact({ contactId, ...values });
    navigate(`/contacts/${contactId}`);
    Notify.success('The contact has been successfully changed.');
  };

  let initialValues = null;
  if (contacts) {
    initialValues = {
      name: currentContact.name,
      number: currentContact.number,
    };
  }

  return (
    contacts && (
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <MainTitle>{`Edit Contact ${currentContact.name}`}</MainTitle>
            <Form onSubmit={handleSubmit}>
              <Label>
                <Title>Name</Title>
                <StyledField
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <ErrorMessage name="name" component="div" />
              </Label>
              <Label>
                <Title>Number</Title>
                <StyledField
                  type="tel"
                  name="number"
                  onChange={handleChange}
                  value={values.number}
                />
                <ErrorMessage name="number" component="div" />
              </Label>
              <Button type="submit">
                {isUpdating ? '...' : 'Change contact'}
              </Button>
            </Form>
          </>
        )}
      </Formik>
    )
  );
}

export default ChangeContactForm;
