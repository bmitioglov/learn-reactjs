import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextualMenu/contextMenu';
import more from '../../img/more.svg';
import defaultmovieimage from '../../img/img_2.png';
import { toggleShowMovieHeader } from '../../reducers/movieSlice';

import './moviecard.css';
import DeleteMovieModal from '../Modals/DeleteMovieModal/deletemoviemodal';
import EditMovieModal from '../Modals/EditMovieModal/editmoviemodal';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const MovieCard = ({ id, title, description, year, image, releaseDate, runtime, genres, overview }) => {
  const [showMenu, setShowMenuState] = useState(false);
  const [editShowModal, setEditShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  
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
        <img onClick={function(event)
                          { dispatch(toggleShowMovieHeader()); history.push(`/movie/${id}`); }}
             className="movie-image" src={image} alt={title} />
        <img onClick={toggleMenu} className="more-icon" src={more} alt="more" />
        { showMenu && (<ContextMenu className="context-menu" options={options} />) }
      </div>
      <div className="image-footer">
        <h3>{title}</h3>
        <div>{year}</div>
      </div>
      <div className="description">{description}</div>
      <DeleteMovieModal id={id} isShown={deleteShowModal} onClose={toggleDelete} />
      <EditMovieModal id={id} title={title} releaseDate={releaseDate} posterPath={image} overview={overview}
                      genres={genres} runtime={runtime} show={editShowModal} onClose={toggleEdit} />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MovieCard;
