import React from 'react';
import './movieslayout.css';
import PropTypes from 'prop-types';

const MoviesLayout = ({ children }) => (
  <div className="movies-layout">{ children }</div>
);

MoviesLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default MoviesLayout;
