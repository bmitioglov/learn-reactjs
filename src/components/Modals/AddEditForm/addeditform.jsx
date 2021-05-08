import React from 'react';
import { Formik, Form } from 'formik';
import FormInput from '../../FormInput/forminput';
import { Genresselect } from '../GenresSelect/genresselect';
import './addeditform.css';

const AddEditForm = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-content">
          <FormInput label="TITLE" name="title" type="text" />
          <FormInput label="RELEASE DATE" name="release_date" type="date" />
          <FormInput label="MOVIE URL" id="poster_path" name="poster_path" type="text" />
          
          <Genresselect label="Genres" name="genres">
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Documentary">Documentary</option>
          </Genresselect>
          
          <FormInput label="OVERVIEW" name="overview" type="text" />
          <FormInput label="RUNTIME" name="runtime" type="number" />
  
          <div className="form-buttons">
            <input className="reset-button" type="reset" value="RESET" />
            <button className="submit-button" type="submit">SUBMIT</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddEditForm;
