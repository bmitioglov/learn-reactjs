import React from 'react';
import Modal from 'react-modal';
import './deletemoviemodal.css';

const DeleteMovieModal = ({ isShown, onClose }) => (
  <Modal
    isOpen={isShown}
    onRequestClose={onClose}
    contentLabel="Example Modal"
    appElement={document.getElementById('app')}
    className="delete-movie-modal"
  >
    <div className="close" onClick={onClose}>
      &times;
    </div>
    <div className="modal-content">
      <h2 className="delete-movie-header">DELETE movie</h2>
      <h3 className="delete-movie-sub-header">Are you sure you want to delete this movie?</h3>
      <div className="form-buttons">
        <button className="submit-button" type="button">CONFIRM</button>
      </div>
    </div>
  </Modal>
);

export default DeleteMovieModal;
