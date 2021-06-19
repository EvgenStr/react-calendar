import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import style from './FormInput.module.sass';

function FormInput ({
  name,
  children,
  formikProps: { isValid, errors, dirty },
  type = 'text',
}) {
  return (
    <>
      <Field
        className={cx(style.input, {
          [style.inputError]: !isValid && errors[name],
          [style.inputValid]: isValid && dirty,
        })}
        name={name}
        type={type}
        placeholder={children}
      />
      <ErrorMessage className={style.error} name={name} component='span' />
    </>
  );
}
export default FormInput;
