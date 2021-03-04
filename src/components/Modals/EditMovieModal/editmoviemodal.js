import React from 'react';
import Modal from 'react-modal';
import './editmoviemodal.css';

const EditMovieModal = ({ isShown, onClose }) => (
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
    <div className="modal-content">
      <h2 className="edit-movie-header">Edit movie</h2>
      <div className="form-field-header">TITLE</div>
      <input className="form-field-input" type="text" />
      <div className="form-field-header">RELEASE DATE</div>
      <input className="form-field-input" type="date" />
      <div className="form-field-header">MOVIE URL</div>
      <input className="form-field-input" type="text" />
      <div className="form-field-header">GENRE</div>
      <select className="form-field-input">
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
      </select>
      <div className="form-field-header">OVERVIEW</div>
      <input className="form-field-input" type="text" />
      <div className="form-field-header">RUNTIME</div>
      <input className="form-field-input" type="text" />
      <div className="form-buttons">
        <button className="reset-button" type="button">RESET</button>
        <button className="submit-button" type="button">SUBMIT</button>
      </div>
    </div>
  </Modal>
);

export default EditMovieModal;
