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
            <>
            <h2 className={style.loginHeader}>LOGIN TO YOUR ACCOUNT</h2>
            <Form className={style.loginForm}>
                            <FormInput name={'email'} formikProps={formikProps}>
                Email Address
              </FormInput>
              <FormInput name={'password'} formikProps={formikProps}>
                Password
              </FormInput>
              <Field
                className={style.submitBtn}
                type='submit'
                value='LOGIN'
              />
            </Form>
            </>
          );
        }}
      </Formik>
    </section>
  );
}
export default LoginForm;
