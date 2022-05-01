import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './RegisterForm.styled';

function RegisterForm() {
  const onSubmitForm = () => {};

  return (
    <>
      <Title>Registration</Title>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmitForm}
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
