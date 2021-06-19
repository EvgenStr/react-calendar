import * as yup from 'yup';
const MIN_CHARACTERS = 5;
const MAX_CHARACTERS = 104;

export const TO_DO_SCHEMA = yup.object({
  name: yup
    .string()
    .trim()
    .required('Required')
    .min(MIN_CHARACTERS, `minimum number of characters: ${MIN_CHARACTERS}`)
    .max(MAX_CHARACTERS, `maximum number of characters: ${MAX_CHARACTERS}`),
});
//signUp SCHEMAS
export const NAME_SCHEMA = yup
  .string()
  .trim()
  .required('Required')
  .matches(/^[A-Z][a-z]{1,15}$/, 'Name must start with a capital letter');

export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required();
export const PASSWORD_SCHEMA = yup.object({
  password: yup
    .string()
    .matches(
      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-])/,
      'Password must contain upper and lower latin characters, numbers and symbols'
    )
    .matches(/^.{8,}$/, 'Password must contain at least 8 characters')
    .required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const SIGN_UP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  ...PASSWORD_SCHEMA,
});
