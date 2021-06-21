import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../FormInput';
import style from './FormGroup.module.sass';

function FormGroup (props) {
  const { inputNames, formikProps } = props;
  const inputsArray = inputNames.map(({ name, placeholder }) => (
    <FormInput formikProps={formikProps} name={name}>
      {placeholder}
    </FormInput>
  ));
  return <div className={style.group}>{inputsArray}</div>;
}
FormGroup.propTypes = {
  inputNames: PropTypes.array.isRequired,
  formikProps: PropTypes.object.isRequired,
};
export default FormGroup;
