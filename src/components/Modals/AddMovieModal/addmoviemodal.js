import React from 'react';
import Modal from 'react-modal';
import './addmoviemodal.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewMovie } from '../../../reducers/movieSlice';
import { validationSchema } from '../../../utils/utils';
import AddEditForm from '../AddEditForm/addeditform';

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
    validationSchema,
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
        <AddEditForm type="add" formik={formik} />
        <div className="form-buttons">
          <input className="reset-button" type="reset" value="RESET" />
          <button className="submit-button" type="submit">SUBMIT</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddMovieModal;
