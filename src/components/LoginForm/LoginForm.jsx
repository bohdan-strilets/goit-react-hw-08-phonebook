import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './LoginForm.styled';
import * as yup from 'yup';
import { useLoginUserMutation } from 'redux/auth-api';
import { saveUser } from 'redux/auth-slice';
import { useDispatch } from 'react-redux';

function LoginForm() {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onSubmitForm = async ({ email, password }) => {
    const { data } = await loginUser({ email, password });
    const saveUserToState = dispatch(saveUser(data));
    return saveUserToState;
  };

  const userLoginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(7).max(14),
  });

  return (
    <>
      <Title>Login</Title>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userLoginSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
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
              <TitleInput>Your password?</TitleInput>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit">{isSubmitting ? '...' : 'Login'}</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
