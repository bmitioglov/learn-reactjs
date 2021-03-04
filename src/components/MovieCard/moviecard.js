import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextualMenu/contextMenu';
import more from '../../img/more.svg';

import './moviecard.css';
import DeleteMovieModal from '../Modals/DeleteMovieModal/deletemoviemodal';
import EditMovieModal from '../Modals/EditMovieModal/editmoviemodal';

const MovieCard = ({ title, description, year }) => {
  
  const [showMenu, setShowMenuState] = useState(false);
  const [editShowModal, setEditShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);
  
  const handleOffMenuClick = () => {
    if (showMenu) setShowMenuState(false);
  };
  
  useEffect(() => {
    window.addEventListener('click', handleOffMenuClick);
    
    return () => {
      window.removeEventListener('click', handleOffMenuClick);
    };
  });
  
  const toggleMenu = () => setShowMenuState((prevValue) => !prevValue);
  const toggleEdit = () => setEditShowModal((prevValue) => !prevValue);
  const toggleDelete = () => setDeleteShowModal((prevValue) => !prevValue);
  
  return (
    <div className="movie-card">
      <div className="image-container">
        <img className="movie-image" src="https://i.pinimg.com/originals/f3/a2/0d/f3a20d7df90d3b4a4167a419a0566ff3.jpg" alt={title} />
        <img onClick={toggleMenu} className="more-icon" src={more} alt="more" />
        { showMenu && (<ContextMenu className="context-menu" toggleEdit={toggleEdit} toggleDelete={toggleDelete} />) }
      </div>
      <div className="image-footer">
        <h3>{title}</h3>
        <div>{year}</div>
      </div>
      <div className="description">{description}</div>
      {/* TODO: is it ok to have it here? */}
      { deleteShowModal && <DeleteMovieModal show={deleteShowModal} onClose={toggleDelete} /> }
      { editShowModal && <EditMovieModal show={editShowModal} onClose={toggleEdit} />}
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
