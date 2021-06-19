import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function RadioGroupInput ({formikProps}) {
  const BleuRadio = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  return (
    <div>
      {/* <label>
        <Field type='radio' name='userIs' value='One' />
        One
      </label>
      <label>
        <Field type='radio' name='userIs' value='Two' />
        Two
      </label> */}
      <RadioGroup aria-label="gender" name='userIs'  onChange={formikProps.handleChange}>
        <FormControlLabel value="female" control={<BleuRadio />}  />
        <FormControlLabel value="male" control={<BleuRadio />}  />

      </RadioGroup>

    </div>
  );
}
export default RadioGroupInput;
