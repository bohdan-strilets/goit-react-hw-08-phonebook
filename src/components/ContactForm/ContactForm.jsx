import {
  TitlePage,
  Label,
  Title,
  StyledField,
  Button,
} from './ContactForm.styled';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contact-api';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Report } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import GoBack from 'components/GoBack';

function ContactForm() {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmitForm = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : createContact({ name, number });

    navigate('/contacts');

    Notify.success(`The ${name} has been added to your contact list.`);
  };

  const contactSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    number: yup.number().required(),
  });

  return (
    <>
      <TitlePage>Add new contact</TitlePage>
      <GoBack text="Contact list" path="/contacts" />
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={onSubmitForm}
        validationSchema={contactSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
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
            <Button type="submit" disabled={isSubmitting}>
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
