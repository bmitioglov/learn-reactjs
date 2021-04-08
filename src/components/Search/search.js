import React, { useState } from 'react';
import './search.css';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  
  const history = useHistory();
  
  function handleClick() {
    if (searchInput !== '') {
      history.push(`/?search=${searchInput}`);
    }
  }
  
  function enterPressed(event) {
    let code = event.keyCode || event.which;
    if (code === 13) { //13 is the enter keycode
      handleClick();
    }
  }
  
  return (
    <div className="search">
      <h3 className="SearchHeader">Find your movie</h3>
      <div className="search-bar">
        <input className="search-input" type="text"
               onKeyPress={enterPressed.bind(this)}
               onChange={(event) => setSearchInput(event.target.value)} />
        <button className="search-button" type="button" onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Search;
