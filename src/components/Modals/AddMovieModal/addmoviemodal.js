import React from 'react';
import Modal from 'react-modal';
import './addmoviemodal.css';
import { useDispatch } from 'react-redux';
import { addNewMovie } from '../../../reducers/movieSlice';
import { validationSchema } from '../../../utils/utils';
import AddEditForm from '../AddEditForm/addeditform';

const AddMovieModal = ({ show, onClose }) => {
  const dispatch = useDispatch();
  
  const initialValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: 'Comedy',
    overview: '',
    runtime: 0,
  };
  
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Add Modal"
      appElement={document.getElementById('app')}
      className="add-movie-modal"
    >
      <div className="close" onClick={onClose}>
        &times;
      </div>
      <div className="modal-content">
        <h2 className="add-movie-header">Add movie</h2>
        <AddEditForm
          initialValues={initialValues}
          onSubmit={(values) => {
           dispatch(addNewMovie(values));
           onClose();
          }}
          validationSchema={validationSchema}
        />
      </div>
    </Modal>
  );
};

export default AddMovieModal;
