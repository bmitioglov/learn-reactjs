import React from 'react';
import './sortpanel.css';
import { useDispatch } from 'react-redux';
import { sortBy } from '../../reducers/movieSlice';

const SortPanel = () => {
  
  const dispatch = useDispatch();
  
  return (
    <div className="sort-panel">
      <div>Sort By</div>
      <select onChange={(e) => dispatch(sortBy(e.target.value))}>
        <option value="title">Title</option>
        <option value="vote_average">Rating</option>
        <option value="release_date">Release Date</option>
      </select>
    </div>
  );
};

export default SortPanel;
