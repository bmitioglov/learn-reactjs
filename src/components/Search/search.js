import React from 'react';
import './search.css';

const Search = () => (
  <div className="search">
    <h3 className="SearchHeader">Find your movie</h3>
    <div className="search-bar">
      <input className="search-input" type="text" />
      <button className="search-button" type="button">Search</button>
    </div>
  </div>
);

export default Search;
