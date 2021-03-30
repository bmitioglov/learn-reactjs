import React from 'react';
import FormInput from '../../FormInput/forminput';

const AddEditForm = ({ formik, type }) => {
  return (
    <>
      <FormInput title="TITLE" id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}
      <FormInput title="RELEASE DATE" id="release_date" name="release_date" type="date" onChange={formik.handleChange} value={formik.values.release_date} onBlur={formik.handleBlur} />
      {formik.touched.release_date && formik.errors.release_date ? (
        <div>{formik.errors.release_date}</div>
      ) : null}
      <FormInput title="MOVIE URL" id="poster_path" name="poster_path" type="text" onChange={formik.handleChange} value={formik.values.poster_path} onBlur={formik.handleBlur} />
      {formik.touched.poster_path && formik.errors.poster_path ? (
        <div>{formik.errors.poster_path}</div>
      ) : null}
      { type === 'add' ? (
        <>
          <div className="form-field-header">GENRE</div>
          <select className="form-field-input" id="genres" name="genres" onChange={formik.handleChange} value={Array.isArray(formik.values.genres) ? formik.values.genres[0] : formik.values.genres} onBlur={formik.handleBlur}>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </>
        ) : null }
      <FormInput title="OVERVIEW" id="overview" name="overview" type="text" onChange={formik.handleChange} value={formik.values.overview} onBlur={formik.handleBlur}/>
      {formik.touched.overview && formik.errors.overview ? (
        <div>{formik.errors.overview}</div>
      ) : null}
      <FormInput title="RUNTIME" id="runtime" name="runtime" type="number" onChange={formik.handleChange} value={formik.values.runtime} onBlur={formik.handleBlur}/>
      {formik.touched.runtime && formik.errors.runtime ? (
        <div>{formik.errors.runtime}</div>
      ) : null}
    </>
  );
};

export default AddEditForm;
