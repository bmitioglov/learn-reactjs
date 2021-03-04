import React from 'react';
import Modal from 'react-modal';
import './addmoviemodal.css';
import FormInput from '../../FormInput/forminput';

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
    <form action="/" method="post" className="modal-content">
      <h2 className="add-movie-header">Add movie</h2>
      <FormInput title="TITLE" type="text" />
      <FormInput title="RELEASE DATE" type="date" />
      <FormInput title="MOVIE URL" type="text" />
      <div className="form-field-header">GENRE</div>
      <select className="form-field-input">
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
      </select>
      <FormInput title="OVERVIEW" type="text" />
      <FormInput title="RUNTIME" type="text" />
      <div className="form-buttons">
        <input className="reset-button" type="reset" value="RESET" />
        <button className="submit-button" type="submit">SUBMIT</button>
      </div>
    </form>
  </Modal>
);

export default AddMovieModal;
