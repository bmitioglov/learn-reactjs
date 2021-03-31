import React from 'react';
import './forminput.css';

import { useField } from 'formik';

const FormInput = (props) => {
  const { label, type } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-field-header">{label}</div>
      <input {...field} {...props} className="form-field-input" type={type} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormInput;
