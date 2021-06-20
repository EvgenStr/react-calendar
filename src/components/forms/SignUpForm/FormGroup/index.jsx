import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../FormInput';
import style from './FormGroup.module.sass';

function FormGroup (props) {
  const {
    inputNames: { names, placeholders },
    formikProps,
  } = props;
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
FormGroup.propTypes = {
  inputNames: PropTypes.exact({
    names: PropTypes.array,
    placeholders: PropTypes.array,
  }).isRequired,
  formikProps: PropTypes.object.isRequired,
};
export default FormGroup;
