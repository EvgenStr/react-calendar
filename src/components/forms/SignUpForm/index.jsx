import React from 'react';
import { Formik, Form, Field } from 'formik';
import RadioGroupInput from './RadioGroup';
import CheckboxInput from './CheckboxInput';
import FormGroup from './FormGroup';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas.js';
import { INPUT_NAMES } from 'constants.js';
import style from './SignUpForm.module.sass';

const { firstGroup, secondGroup, thirdGroup } = INPUT_NAMES;
const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  userIs: '',
  terms: false,
};

function SignUpForm () {
  const submitHandler = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  };
  return (
    <section className={style.container}>
      <h2 className={style.signUpHeader}>CREATE AN ACCOUNT</h2>
      <h4 className={style.signUpHeaderDesc}>
        We always keep your name and email address private.
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={SIGN_UP_SCHEMA}
        validateOnBlur={true}
        onSubmit={submitHandler}
      >
        {formikProps => {
          return (
            <Form className={style.signUpForm}>
              <FormGroup inputNames={firstGroup} formikProps={formikProps} />
              <FormGroup inputNames={secondGroup} formikProps={formikProps} />
              <FormGroup inputNames={thirdGroup} formikProps={formikProps} />
              <RadioGroupInput formikProps={formikProps} />
              <CheckboxInput formikProps={formikProps} />
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
export default SignUpForm;
