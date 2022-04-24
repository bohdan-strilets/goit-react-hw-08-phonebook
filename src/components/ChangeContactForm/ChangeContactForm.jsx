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
  useGetContactByidQuery,
} from 'redux/contact-api';
import { useParams, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function ChangeContactForm() {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [chengeContact, { isLoading: isUpdating }] = useChangeContactMutation();
  const { data } = useGetContactByidQuery(contactId);

  const onSubmitForm = values => {
    chengeContact({ contactId, ...values });
    navigate(`/contacts/${contactId}`);
    Notify.success('The contact has been successfully changed.');
  };

  return (
    data && (
      <Formik
        initialValues={{
          name: data.name,
          phone: data.phone,
          email: data.email,
          city: data.city,
          company: data.company,
        }}
        onSubmit={onSubmitForm}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <MainTitle>{`Edit Contact ${data.name}`}</MainTitle>
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
                <Title>Phone</Title>
                <StyledField
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
                <ErrorMessage name="phone" component="div" />
              </Label>
              <Label>
                <Title>Email</Title>
                <StyledField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <ErrorMessage name="email" component="div" />
              </Label>
              <Label>
                <Title>City</Title>
                <StyledField
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                />
                <ErrorMessage name="city" component="div" />
              </Label>
              <Label>
                <Title>Company</Title>
                <StyledField
                  type="text"
                  name="company"
                  onChange={handleChange}
                  value={values.company}
                />
                <ErrorMessage name="company" component="div" />
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
