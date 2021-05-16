import React from 'react';
import Modal from 'react-modal';
import './deletemoviemodal.css';
import {useDispatch} from 'react-redux';
import { deleteMovie } from '../../../reducers/movieSlice';


const Deletemoviemodal = ({ id, isShown, onClose }) => {
  
  const dispatch = useDispatch();
  
  return (
    <Modal
      isOpen={isShown}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      // appElement={document.getElementById('app')}
      className="delete-movie-modal"
    >
      <div className="close" onClick={onClose}>
        &times;
      </div>
      <div className="modal-content">
        <h2 className="delete-movie-header">DELETE movie</h2>
        <h3 className="delete-movie-content">Are you sure you want to delete this movie?</h3>
        <div className="form-buttons">
          <button onClick={() => dispatch(deleteMovie(id))} type="button" className="submit-button">CONFIRM</button>
        </div>
      </div>
    </Modal>
  );
};

export default Deletemoviemodal;
