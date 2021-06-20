import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import RadioGroup from '@material-ui/core/RadioGroup';
import style from './RadioGroup.module.sass';

function RadioGroupInput ({ formikProps }) {
  const BleuRadio = withStyles({
    root: {
      color: grey[200],
      '&$checked': {
        color: blue[800],
      },
    },
    checked: {},
  })(props => <Radio color='default' {...props} />);
  return (
    <div className={style.container}>
      <RadioGroup
        aria-label='gender'
        name='userIs'
        onChange={formikProps.handleChange}
      >
        <div className={style.wrapper}>
          <label>
            <BleuRadio value='buyer' />
            Join As a Buyer
            <span className={style.description}>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </span>
          </label>
        </div>
        <div className={style.wrapper}>
          <label>
            <BleuRadio value='creative' />
            Join As a Creative or Marketplace Seller
            <span className={style.description}>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </span>
          </label>
        </div>
      </RadioGroup>
      <ErrorMessage className={style.error} name='userIs' component={'span'} />
    </div>
  );
}
RadioGroupInput.propTypes = {
  formikProps: PropTypes.object.isRequired,
};
export default RadioGroupInput;
