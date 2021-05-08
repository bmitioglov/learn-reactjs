import React, { useEffect } from 'react';
import './sortpanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { sortMoviesInCategory, selectCategory } from '../../reducers/movieSlice';

const Sortpanel = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  
  useEffect(() => {
    const selector = document.getElementById('sortSelector');
    selector.value = 'title';
  }, [category]);
  
  return (
    <div className="sort-panel">
      <div>Sort By</div>
      <select id="sortSelector" onChange={(e) => dispatch(sortMoviesInCategory({
            params: {
              filter: category !== 'All' ? category : undefined,
              sortBy: e.target.value,
              sortOrder: 'asc',
            },
          }))}
      >
        <option value="title">Title</option>
        <option value="vote_average">Rating</option>
        <option value="release_date">Release Date</option>
      </select>
    </div>
  );
};

export default Sortpanel;
