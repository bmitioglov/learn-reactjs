import React from 'react';
import Modal from 'react-modal';
import './addmoviemodal.css';

const AddMovieModal = ({ show, onClose }) => (
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
    <div className="modal-content">
      <h2 className="add-movie-header">Add movie</h2>
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
      <div className="form-field-header">Overview</div>
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

export default AddMovieModal;
