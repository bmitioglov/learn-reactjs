import React from 'react';
import { Formik, Form } from 'formik';
import FormInput from '../../FormInput/forminput';
import { GenresSelect } from '../GenresSelect/genresselect';
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
          
          <GenresSelect label="Genres" name="genres">
            <option value="">Select a genre</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
          </GenresSelect>
          
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
