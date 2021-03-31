import React from 'react';
import Modal from 'react-modal';
import './editmoviemodal.css';
import {updateMovie} from '../../../reducers/movieSlice';
import { useDispatch } from 'react-redux';
import { validationSchema } from '../../../utils/utils';
import AddEditForm from '../AddEditForm/addeditform';

const EditMovieModal = ({ id, title, releaseDate, posterPath, overview, runtime, genres, show, onClose }) => {
  
  const dispatch = useDispatch();
  
  const initialValues = {
    id: id,
    title: title,
    release_date: releaseDate,
    poster_path: posterPath,
    overview: overview,
    runtime: runtime,
    genres: genres,
  };
  
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Edit Modal"
      appElement={document.getElementById('app')}
      className="edit-movie-modal"
    >
      <div className="close" onClick={onClose}>
        &times;
      </div>
      <div className="modal-content">
        <h2 className="edit-movie-header">Edit movie</h2>
        <AddEditForm
          initialValues={initialValues}
          onSubmit={(values) => {
           dispatch(updateMovie(values));
           onClose();
          }}
          validationSchema={validationSchema}
        />
      </div>
    </Modal>
  );
};

export default EditMovieModal;
