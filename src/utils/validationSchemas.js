import * as yup from 'yup';

export const TO_DO_SCHEMA = yup.object({
  name: yup.string().min(5, 'min character error').max(104, 'max character error')
})