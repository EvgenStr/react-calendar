import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import cx from 'classnames';
import { TO_DO_SCHEMA } from 'utils/validationSchemas';
import style from './AddItemInput.module.sass';

const initialValues = {
  name: '',
};

export default function AddItemInput ({ addNewItem }) {
  const submitHandler = (values, actions) => {
    const newToDo = {
      ...values,
      id: uuidv4(),
      isDone: false,
    };
    addNewItem(newToDo);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TO_DO_SCHEMA}
      validateOnBlur={true}
      onSubmit={submitHandler}
    >
      {({ errors, isValid, dirty }) => {
        return (
          <Form className={style.addForm}>
            <Field
              className={cx(style.addForm, {
                [style.inputError]: !isValid && errors.name,
                [style.inputValid]: isValid && dirty,
              })}
              name='name'
            />
            <Field type='submit' value='Add' />
            <ErrorMessage
              className={style.error}
              name='name'
              component='span'
            />
          </Form>
        );
      }}
    </Formik>
  );
}
