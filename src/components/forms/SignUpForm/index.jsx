import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import FormInput from '../FormInput';
import style from './SignUpForm.module.sass';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas.js';

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
        onSubmit={()=>{}}
      >
        {formikProps => {
          console.log(formikProps)
          return (
            <Form className={style.addForm}>
              <FormInput formikProps={formikProps}/>
              <Field type='submit' value='Add' />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default SignUpForm;
