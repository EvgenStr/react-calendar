import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import style from './FormInput.module.sass';

function FormInput ({formikProps:{isValid, errors, dirty}}) {
  return (
    <>
      <Field
        className={cx(style.addForm, {
          [style.inputError]:
            !isValid && errors.firstName,
          [style.inputValid]: isValid && dirty,
        })}
        name='firstName'
      />
      <ErrorMessage className={style.error} name='firstName' component='span' />
    </>
  );
}
export default FormInput;
