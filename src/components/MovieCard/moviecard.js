import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, description }) => (
  <div className="MovieCard">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
