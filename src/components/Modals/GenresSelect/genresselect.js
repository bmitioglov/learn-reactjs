import React from 'react';
import { Formik, Form, useField } from 'formik';

export const GenresSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="form-field-header" htmlFor={props.id || props.name}>{label}</label>
      <select className="form-field-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
