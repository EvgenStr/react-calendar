import React from 'react';
import { Formik, Form, Field } from 'formik';
import FormInput from '../FormInput';
import { LOGIN_SCHEMA } from 'utils/validationSchemas.js';
import style from './LoginForm.module.sass';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm () {
  const submitHandler = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  };
  return (
    <section className={style.container}>
      <h2 className={style.loginHeader}>LOGIN TO YOUR ACCOUNT</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LOGIN_SCHEMA}
        validateOnBlur={true}
        onSubmit={submitHandler}
      >
        {formikProps => {
          return (
            <Form className={style.loginForm}>
              <FormInput name={'email'} formikProps={formikProps}>
                Email Address
              </FormInput>
              <FormInput name={'password'} formikProps={formikProps}>
                Password
              </FormInput>
              <Field className={style.submitBtn} type='submit' value='LOGIN' />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default LoginForm;
