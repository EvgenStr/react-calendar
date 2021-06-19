import React, { useContext } from 'react';
import FormInput from '../../FormInput';
import style from './FormGroup.module.sass';
import { SignUpContext } from 'contexts';

export default function FormGroup (props) {

const {inpNames:{names, placeholders}, formikProps} =props
  return (
    <div className={style.group}>
      <FormInput formikProps={formikProps} name={names[0]}>
      {placeholders[0]}
      </FormInput>
      <FormInput formikProps={formikProps} name={names[1]}>
      {placeholders[1]}
      </FormInput>
    </div>
  );
}
