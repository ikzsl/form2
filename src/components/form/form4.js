/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Formik, Form, FieldArray, useField,
} from 'formik';
import * as Yup from 'yup';
import { Input, Checkbox, Button } from 'antd';

import './form.scss';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <Checkbox {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

// const addField = (values, arrayHelpers) => {
//   arrayHelpers.push('');
//   document.getElementById('0').focus();
// };

// And now we can use these
const SignupForm = () => (
  <>
    <h1>Subscribe!</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false, // added for our checkbox
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      render={({ values }) => (
        <Form className="form">
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
            className="field"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            className="field"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
            className="field"
          />

          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {values.friends && values.friends.length > 0
                  ? values.friends.map((friend, index) => (
                    <div key={index} className="field">
                      <Input
                        id={index}
                        name={`friends.${index}`}
                        onPressEnter={(evt) => {
                          evt.preventDefault();
                          arrayHelpers.insert(index, '');
                          document.getElementById(values.friends.length - 1).focus();
                          // console.log(arrayHelpers);
                        }}
                      />
                    </div>
                  ))
                  : arrayHelpers.push('')}
                <Button
                  onClick={() => {
                    document.getElementById(values.friends.length - 1).focus();
                    arrayHelpers.push('');
                  }}
                  className="field"
                  type="primary"
                >
                  Add
                </Button>
              </div>
            )}
          />

          <MyCheckbox name="acceptedTerms">I accept the terms</MyCheckbox>

          <Button htmlType="submit" className="field" type="primary">
            Submit
          </Button>
        </Form>
      )}
    />
  </>
);

export default SignupForm;
