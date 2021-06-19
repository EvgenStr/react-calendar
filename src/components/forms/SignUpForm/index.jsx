import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from 'SignUpForm.module.sass';
import cx from 'classnames';
import {SIGN_UP_SCHEMA} from 'utils/validationSchemas.js'

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

function SignUpForm () {
  return (
    <section className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={SIGN_UP_SCHEMA}
        validateOnBlur={true}
        onSubmit={submitHandler}
      >
        {({ errors, isValid, dirty }) => {
          return (
            <Form className={style.addForm}>
              <Field
                className={cx(style.addForm, {
                  [style.inputError]: !isValid && errors.name,
                  [style.inputValid]: isValid && dirty,
                })}
                name='name'
              />
              <Field type='submit' value='Add' />
              <ErrorMessage
                className={style.error}
                name='name'
                component='span'
              />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default SignUpForm;
