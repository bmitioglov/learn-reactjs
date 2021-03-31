import React from 'react';
import './forminput.css';

const FormInput = ({ title, type, onChange, value, id, name, onBlur, isTouched, isError }) => (
  <>
    <div className="form-field-header">{title}</div>
    <input id={id} name={name} className="form-field-input" type={type} onChange={onChange} value={value} onBlur={onBlur} />
    {isTouched && isError ? (
      <div>{isError}</div>
    ) : null}
  </>
);

export default FormInput;
