import React from 'react';
import './forminput.css';

const FormInput = ({ title, type, onChange, value, id, name, onBlur }) => (
  <>
    <div className="form-field-header">{title}</div>
    <input id={id} name={name} className="form-field-input" type={type} onChange={onChange} value={value} onBlur={onBlur} />
  </>
);

export default FormInput;
