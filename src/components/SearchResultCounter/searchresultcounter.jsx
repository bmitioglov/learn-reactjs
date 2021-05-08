import React from 'react';
import './searchresultcounter.css';
import PropTypes from 'prop-types';

const SearchResult = ({ searchResult }) => (
  <div className="search-result">
    { searchResult }
    { ' ' }
    Movies Found
  </div>
);

SearchResult.propTypes = {
  searchResult: PropTypes.number.isRequired,
};

export default SearchResult;
