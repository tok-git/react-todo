import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from 'components/common';
import { InputField } from 'components/form';
import AuthActions from 'redux/AuthRedux';
import validationSchema from './schema';

const INITIAL_VALUES = {
  username: ''
};

function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(AuthActions.login(values.username));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field component={InputField} name="username" label="Username" />
          <Button mt={2} type="submit" loading={isSubmitting}>
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
