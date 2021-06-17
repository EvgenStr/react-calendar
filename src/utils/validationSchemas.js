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
