import { Label, Title, StyledField, Button } from './ContactForm.styled';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contact-api';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Report } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function ContactForm() {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmitForm = ({ name, phone, email, city, company }) => {
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : createContact({ name, phone, email, city, company });

    navigate('/');

    Notify.success(`The ${name} has been added to your contact list.`);
  };

  const contactSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    phone: yup.number().required(),
    email: yup.string().email(),
    city: yup.string().min(3).max(30),
    company: yup.string().min(3).max(50),
  });

  return (
    <Formik
      initialValues={{ name: '', phone: '', email: '', city: '', company: '' }}
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
          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
