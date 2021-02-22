import React from 'react';
import './search.css';

const Search = () => (
  <div className="Search">
    <h3 className="SearchHeader">Find your movie</h3>
    <div className="SearchBar">
      <input className="SearchInput" type="text" />
      <button className="SearchButton" type="button">Search</button>
    </div>
  </div>
);

export default Search;
