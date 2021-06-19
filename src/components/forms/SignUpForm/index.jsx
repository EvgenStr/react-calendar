import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import FormGroup from './FormGroup';
import style from './SignUpForm.module.sass';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas.js';
import { INPUT_NAMES } from 'constants.js';

const { firstGroup, secondGroup, thirdGroup } = INPUT_NAMES;

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  userIs: '',
};

function SignUpForm () {
  return (
    <section className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={SIGN_UP_SCHEMA}
        validateOnBlur={true}
        onSubmit={() => {}}
      >
        {formikProps => {
          console.log(formikProps);
          return (
            <Form className={style.addForm}>
              <FormGroup inpNames={firstGroup} formikProps={formikProps} />
              <FormGroup inpNames={secondGroup} formikProps={formikProps} />
              <FormGroup inpNames={thirdGroup} formikProps={formikProps} />

              <Field type='submit' value='Create account' />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default SignUpForm;
