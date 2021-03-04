import React from 'react';
import './forminput.css';

const FormInput = ({ title, type }) => (
  <>
    <div className="form-field-header">{title}</div>
    <input className="form-field-input" type={type} />
  </>
);

export default FormInput;
