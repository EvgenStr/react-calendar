import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormInput from '../FormInput';
import style from './LoginForm.module.sass';
import { LOGIN_SCHEMA } from 'utils/validationSchemas.js';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm () {
  const submitHandler = values => {
    console.log(values);
  };
  return (
    <section className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={LOGIN_SCHEMA}
        validateOnBlur={true}
        onSubmit={submitHandler}
      >
        {formikProps => {
          console.log(formikProps);
          return (
            <Form className={style.signUpForm}>
              <Field
                className={style.submitBtn}
                type='submit'
                value='Create account'
              />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default LoginForm;
