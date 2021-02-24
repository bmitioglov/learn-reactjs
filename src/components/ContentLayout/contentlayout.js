import React from 'react';
import './contentlayout.css';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div className="content-layout">{ children }</div>
);

Content.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
