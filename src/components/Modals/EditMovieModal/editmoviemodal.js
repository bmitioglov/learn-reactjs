import React from 'react';
import Modal from 'react-modal';
import './editmoviemodal.css';
import {useFormik} from 'formik';
import { updateMovie } from '../../../reducers/movieSlice';
import { useDispatch } from 'react-redux';
import { validationSchema } from '../../../utils/utils';
import AddEditForm from '../AddEditForm/addeditform';


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
    validationSchema,
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
        <AddEditForm type="edit" formik={formik} />
        <div className="form-buttons">
          <input className="reset-button" type="reset" value="RESET" />
          <button className="submit-button" type="submit">SUBMIT</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditMovieModal;
