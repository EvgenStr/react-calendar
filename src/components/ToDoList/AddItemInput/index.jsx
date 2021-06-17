import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { uuid } from 'uuidv4';
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
      id: uuid(),
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
      {formikProps => {
        console.log(formikProps);
        return (
          <Form className={style.addForm}>
            <Field
              className={cx(style.addForm, {
                [style.inputError]:
                  !formikProps.isValid && formikProps.errors.name,
                [style.inputValid]: formikProps.isValid && formikProps.dirty,
              })}
              name='name'
            />
            <Field type='submit' value='Add' />
            {
              <ErrorMessage
                className={style.error}
                name='name'
                component='span'
              />
            }
          </Form>
        );
      }}
    </Formik>
  );
}
