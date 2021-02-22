import React from 'react';
import PropTypes from 'prop-types';

import './moviecard.css';

const MovieCard = ({ title, description }) => (
  <div className="MovieCard">
    <img src="https://i.pinimg.com/originals/f3/a2/0d/f3a20d7df90d3b4a4167a419a0566ff3.jpg" alt="movieImage" />
    <div className="ImageFooter">
      <h3>{title}</h3>
      <p>year</p>
    </div>
    <p>{description}</p>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
