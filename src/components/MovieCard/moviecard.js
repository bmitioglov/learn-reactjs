import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextualMenu/contextMenu';
import more from '../../img/more.svg';

import './moviecard.css';
import DeleteMovieModal from '../Modals/DeleteMovieModal/deletemoviemodal';
import EditMovieModal from '../Modals/EditMovieModal/editmoviemodal';

const MovieCard = ({ title, description, year }) => {
  const [menuState, setMenuState] = useState({
    xPos: '0px',
    yPos: '0px',
    showMenu: false,
  });
  const [editShowModal, setEditShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);
  
  const handleOffMenuClick = (e) => {
    if (menuState.showMenu) setMenuState({ showMenu: false });
  };
  
  useEffect(() => {
    window.addEventListener('click', handleOffMenuClick);
    
    return () => {
      window.removeEventListener('click', handleOffMenuClick);
    };
  });
  
  const showContextMenu = (e) => {
    e.preventDefault();
    
    setMenuState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      showMenu: true,
    });
  };
  
  const toggleEdit = () => setEditShowModal((prevValue) => !prevValue);
  const toggleDelete = () => setDeleteShowModal((prevValue) => !prevValue);
  
  return (
    <div className="movie-card">
      <div className="image-container">
        <img className="movie-image" src="https://i.pinimg.com/originals/f3/a2/0d/f3a20d7df90d3b4a4167a419a0566ff3.jpg" alt={title} />
        <img onClick={showContextMenu} className="more-icon" src={more} alt="more" />
      </div>
      <div className="image-footer">
        <h3>{title}</h3>
        <div>{year}</div>
      </div>
      <div className="description">{description}</div>
      {/* TODO: is it ok to have it here? */}
      { deleteShowModal && <DeleteMovieModal show={deleteShowModal} onClose={toggleDelete} /> }
      { editShowModal && <EditMovieModal show={editShowModal} onClose={toggleEdit} />}
      { menuState.showMenu && (<ContextMenu xPos={menuState.xPos} yPos={menuState.yPos}
                                            toggleEdit={toggleEdit} toggleDelete={toggleDelete}/>)
      }
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
