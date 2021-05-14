import React from 'react';
import './movieslayout.css';
import PropTypes from 'prop-types';

const Movieslayout = ({ children }) => (
  <div className="movies-layout">{ children }</div>
);

Movieslayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Movieslayout;
