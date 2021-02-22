import React from 'react';
import './footerlayout.css';
import PropTypes from 'prop-types';

const FooterLayout = ({ children }) => <div className="FooterLayout">{children}</div>;

FooterLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default FooterLayout;
