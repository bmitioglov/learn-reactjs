import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextualMenu/contextMenu';
import more from '../../img/more.svg';
import defaultmovieimage from '../../img/img_2.png';

import './moviecard.css';
import DeleteMovieModal from '../Modals/DeleteMovieModal/deletemoviemodal';
import EditMovieModal from '../Modals/EditMovieModal/editmoviemodal';

const MovieCard = ({ title, description, year, image, onClick }) => {
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
  
  const options = [
    { title: 'Edit', callback: toggleEdit },
    { title: 'Delete', callback: toggleDelete },
  ];
  
  return (
    <div className="movie-card">
      <div className="image-container">
        <img onClick={onClick} className="movie-image" src={image}
             onError={(e)=>{e.target.onerror = null; e.target.src=defaultmovieimage}}/>
        <img onClick={toggleMenu} className="more-icon" src={more} alt="more" />
        { showMenu && (<ContextMenu className="context-menu" options={options} />) }
      </div>
      <div className="image-footer">
        <h3>{title}</h3>
        <div>{year}</div>
      </div>
      <div className="description">{description}</div>
      <DeleteMovieModal isShown={deleteShowModal} onClose={toggleDelete} />
      <EditMovieModal isShown={editShowModal} onClose={toggleEdit} />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
