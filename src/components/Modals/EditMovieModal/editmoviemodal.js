import React from 'react';
import Modal from 'react-modal';
import './editmoviemodal.css';
import FormInput from '../../FormInput/forminput';
import {useFormik} from 'formik';
import { updateMovie } from '../../../reducers/movieSlice';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';


const EditMovieModal = ({ id, title, releaseDate, posterPath, overview, runtime, isShown, onClose }) => {
  
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      id: id,
      title: title,
      release_date: releaseDate,
      poster_path: posterPath,
      overview: overview,
      runtime: runtime,
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
      dispatch(updateMovie(values));
      onClose();
    },
  });
  
  return (
    <Modal
      isOpen={isShown}
      onRequestClose={onClose}
      contentLabel="Edit Modal"
      appElement={document.getElementById('app')}
      className="edit-movie-modal"
    >
      <div className="close" onClick={onClose}>
        &times;
      </div>
      <form onSubmit={formik.handleSubmit} className="modal-content">
        <h2 className="edit-movie-header">Edit movie</h2>
        <FormInput id="title" name="title" title="TITLE" type="text" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <FormInput id="release_date" name="release_date" title="RELEASE DATE" type="date" onChange={formik.handleChange} value={formik.values.release_date} onBlur={formik.handleBlur} />
        {formik.touched.release_date && formik.errors.release_date ? (
          <div>{formik.errors.release_date}</div>
        ) : null}
        <FormInput id="poster_path" name="poster_path" title="MOVIE URL" type="text" onChange={formik.handleChange} value={formik.values.poster_path} onBlur={formik.handleBlur} />
        {formik.touched.poster_path && formik.errors.poster_path ? (
          <div>{formik.errors.poster_path}</div>
        ) : null}
        <FormInput id="overview" name="overview" title="OVERVIEW" type="text" onChange={formik.handleChange} value={formik.values.overview} onBlur={formik.handleBlur} />
        {formik.touched.overview && formik.errors.overview ? (
          <div>{formik.errors.overview}</div>
        ) : null}
        <FormInput id="runtime" name="runtime" title="RUNTIME" type="text" onChange={formik.handleChange} value={formik.values.runtime} onBlur={formik.handleBlur} />
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

export default EditMovieModal;
