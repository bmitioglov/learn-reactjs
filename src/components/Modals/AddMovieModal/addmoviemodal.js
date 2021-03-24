import React from 'react';
import Modal from 'react-modal';
import './addmoviemodal.css';
import FormInput from '../../FormInput/forminput';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewMovie } from '../../../reducers/movieSlice';
import * as Yup from 'yup';


const AddMovieModal = ({ show, onClose }) => {
  
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres: 'Comedy',
      overview: '',
      runtime: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      release_date: Yup.date()
        .required('Required'),
      poster_path: Yup.string()
        .url('Invalid Url')
        .required('Required'),
      overview: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      runtime: Yup.number()
        .integer('Must be an integer')
        .required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(addNewMovie(values));
      onClose();
    },
  });
  
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      appElement={document.getElementById('app')}
      className="add-movie-modal"
    >
      <div className="close" onClick={onClose}>
        &times;
      </div>
      <form onSubmit={formik.handleSubmit} className="modal-content">
        <h2 className="add-movie-header">Add movie</h2>
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
        <div className="form-field-header">GENRE</div>
        <select className="form-field-input" id="genres" name="genres" onChange={formik.handleChange} value={Array.isArray(formik.values.genres) ? formik.values.genres[0] : formik.values.genres} onBlur={formik.handleBlur}>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Horror</option>
        </select>
        <FormInput title="OVERVIEW" id="overview" name="overview" type="text" onChange={formik.handleChange} value={formik.values.overview} onBlur={formik.handleBlur}/>
        {formik.touched.overview && formik.errors.overview ? (
          <div>{formik.errors.overview}</div>
        ) : null}
        <FormInput title="RUNTIME" id="runtime" name="runtime" type="number" onChange={formik.handleChange} value={formik.values.runtime} onBlur={formik.handleBlur}/>
        {formik.touched.runtime && formik.errors.runtime ? (
          <div>{formik.errors.runtime}</div>
        ) : null}
        <div className="form-buttons">
          <input className="reset-button" type="reset" value="RESET" />
          <button className="submit-button" type="submit">SUBMIT</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddMovieModal;
