import React from 'react';
import PropTypes from 'prop-types';

import './moviecard.css';

const MovieCard = ({ title, description, year }) => (
  <div className="movie-card">
    <img className="movie-image" src="https://i.pinimg.com/originals/f3/a2/0d/f3a20d7df90d3b4a4167a419a0566ff3.jpg" alt="Not available" />
    <div className="image-footer">
      <h3>{title}</h3>
      <div>{year}</div>
    </div>
    <div className="description">{description}</div>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
