import React from 'react';
import FormInput from '../../FormInput/forminput';

const AddEditForm = ({ formik, type }) => {
  return (
    <>
      <FormInput title="TITLE" id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title}
                 onBlur={formik.handleBlur} isTouched={formik.touched.title} isError={formik.errors.title} />
      <FormInput title="RELEASE DATE" id="release_date" name="release_date" type="date" onChange={formik.handleChange} value={formik.values.release_date}
                 onBlur={formik.handleBlur} isTouched={formik.touched.release_date} isError={formik.errors.release_date} />
      <FormInput title="MOVIE URL" id="poster_path" name="poster_path" type="text" onChange={formik.handleChange} value={formik.values.poster_path}
                 onBlur={formik.handleBlur} isTouched={formik.touched.poster_path} isError={formik.errors.poster_path}/>
      { type === 'add' ? (
        <>
          <div className="form-field-header">GENRE</div>
          <select className="form-field-input" id="genres" name="genres" onChange={formik.handleChange}
                  value={Array.isArray(formik.values.genres) ? formik.values.genres[0] : formik.values.genres} onBlur={formik.handleBlur}>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </>
        ) : null }
      <FormInput title="OVERVIEW" id="overview" name="overview" type="text" onChange={formik.handleChange} value={formik.values.overview}
                 onBlur={formik.handleBlur} isTouched={formik.touched.overview} isError={formik.errors.overview} />
      <FormInput title="RUNTIME" id="runtime" name="runtime" type="number" onChange={formik.handleChange} value={formik.values.runtime}
                 onBlur={formik.handleBlur} isTouched={formik.touched.runtime} isError={formik.errors.runtime} />
    </>
  );
};

export default AddEditForm;
