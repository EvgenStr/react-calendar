import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RadioGroupInput from './RadioGroup';
import CheckboxInput from './CheckboxInput';
import FormGroup from './FormGroup';
import style from './SignUpForm.module.sass';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas.js';
import { INPUT_NAMES } from 'constants.js';

const { firstGroup, secondGroup, thirdGroup } = INPUT_NAMES;
console.log(SIGN_UP_SCHEMA);
const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  userIs: '',
  terms: '',
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
            <Form className={style.signUpForm}>
              <FormGroup inpNames={firstGroup} formikProps={formikProps} />
              <FormGroup inpNames={secondGroup} formikProps={formikProps} />
              <FormGroup inpNames={thirdGroup} formikProps={formikProps} />
              <RadioGroupInput formikProps={formikProps} />
              <CheckboxInput formikProps={formikProps}/>
              <Field type='submit' value='Create account' />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default SignUpForm;
