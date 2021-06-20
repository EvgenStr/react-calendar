import React from 'react';
import style from './CheckboxInput.module.sass';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CheckboxInput ({ formikProps: { handleChange } }) {
  return (
    <div className={style.container}>
      <Checkbox
        onChange={handleChange}
        name='terms'
        className={style.checkbox}
      />
      <span>
        Allow Squadhelp to send marketing/promotional offers from time to time
      </span>
      <ErrorMessage className={style.error} name='terms' component={'span'} />
    </div>
  );
}
export default CheckboxInput;
