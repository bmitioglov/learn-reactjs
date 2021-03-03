import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextualMenu from '../ContextualMenu/contextualmenu';
import more from '../../img/more.svg';

import './moviecard.css';

const MovieCard = ({ title, description, year }) => {
  const [menuState, setMenuState] = useState({
    xPos: '0px',
    yPos: '0px',
    showMenu: false,
  });
  
  const handleClick = (e) => {
    if (menuState.showMenu) setMenuState({ showMenu: false });
  };
  
  useEffect(() => {
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });
  
  const handleContextMenu = (e) => {
    e.preventDefault();
    
    setMenuState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      showMenu: true,
    });
  };
  
  return (
    <div className="movie-card">
      <div className="image-container">
        <img className="movie-image" src="https://i.pinimg.com/originals/f3/a2/0d/f3a20d7df90d3b4a4167a419a0566ff3.jpg" alt={title} />
        <img onClick={handleContextMenu} className="more-icon" src={more} alt="more" />
      </div>
      <div className="image-footer">
        <h3>{title}</h3>
        <div>{year}</div>
      </div>
      <div className="description">{description}</div>
      <ContextualMenu showMenu={menuState.showMenu} xPos={menuState.xPos} yPos={menuState.yPos} />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
