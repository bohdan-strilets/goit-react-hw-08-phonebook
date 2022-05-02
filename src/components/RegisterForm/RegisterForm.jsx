import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './RegisterForm.styled';
import * as yup from 'yup';
import { useRegisterUserMutation } from 'redux/auth/auth-api';
import { saveUser } from 'redux/auth/auth-slice';
import { useDispatch } from 'react-redux';

function RegisterForm() {
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const onSubmitForm = async ({ name, email, password }) => {
    const { data } = await registerUser({ name, email, password });
    const saveUserToState = dispatch(saveUser(data));
    return saveUserToState;
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
