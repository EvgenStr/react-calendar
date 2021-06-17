import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { uuid } from 'uuidv4';
import { TO_DO_SCHEMA } from 'utils/validationSchemas';

const initialValues = {
  name: '',
};

export default function AddItemInput({ addNewItem }) {
  const submitHandler = (values, actions) => {
    const newToDo = {
      ...values,
      id: uuid(),
      isDone: false,
    }
    addNewItem(newToDo);
    actions.resetForm();
  }
  return (
    <Formik initialValues={initialValues} validationSchema={TO_DO_SCHEMA} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form >
            <Field name='name' />
            <ErrorMessage name='name' component='span' />
            <Field type='submit' value='Add' />
          </Form>
        )
      }}
    </Formik>
  )
}
