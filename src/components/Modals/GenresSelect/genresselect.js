import React from 'react';
import { useField } from 'formik';
import '../../FormInput/forminput.css';

export const GenresSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="form-field-header" htmlFor={props.id || props.name}>{label}</label>
      <select multiple className="select-form-input" value={field.value} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
