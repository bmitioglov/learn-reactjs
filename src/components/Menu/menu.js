import React from 'react';
import './menu.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchMovies, setCategory, setShowMovieHeader } from '../../reducers/movieSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  function fetchWithFilter(filterValue) {
      return () => {
        dispatch(setShowMovieHeader(false));
        dispatch(fetchMovies({
            params: {
              filter: filterValue,
              sortBy: 'title',
              sortOrder: 'asc',
            },
          }));
        dispatch(setCategory(filterValue !== undefined ? filterValue : 'All'));
        history.push('/');
      };
    }
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    return (
      <ul className="menu">
        {
          genres.map((genre) => (
            <li key={genre}>
              <button type="button" onClick={fetchWithFilter(genre !== 'All' ? genre : undefined)}>{genre}</button>
            </li>
          ))
        }
      </ul>
    );
};

export default Menu;
