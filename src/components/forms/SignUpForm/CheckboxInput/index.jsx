import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ErrorMessage } from 'formik';
import style from './CheckboxInput.module.sass';

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
