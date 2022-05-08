import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './RegisterForm.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ name, email, password }) => {
    dispatch(operations.registerUser({ name, email, password }));
    navigate('/');
  };

  const userRegisterSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().min(7).max(14),
  });

  return (
    <>
      <Title>Registration</Title>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userRegisterSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              <TitleInput>What is your name?</TitleInput>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <TitleInput>Your e-mail adress?</TitleInput>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <TitleInput>Create a password.</TitleInput>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">
              {isSubmitting ? '...' : 'Registration'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm;
