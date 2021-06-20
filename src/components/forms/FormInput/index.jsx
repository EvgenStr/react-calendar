import React from 'react';
import { Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import style from './FormInput.module.sass';

function FormInput ({
  name,
  children,
  formikProps: { touched, errors },
  type = 'text',
}) {
  return (
    <div className={style.container}>
      <Field
        className={cx(style.input, {
          [style.inputError]: touched[name] && errors[name],
          [style.inputValid]: touched[name] && !errors[name],
        })}
        name={name}
        type={type}
        placeholder={children}
      />
      {errors[name] && (
        <ErrorMessage className={style.error} name={name} component={'span'} />
      )}
    </div>
  );
}
export default FormInput;
