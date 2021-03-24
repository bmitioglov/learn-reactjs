import React from 'react';
import './menu.css';
import { useDispatch } from 'react-redux';
import { fetchMovies, setCategory } from '../../reducers/movieSlice';

const Menu = () => {
    const dispatch = useDispatch();
    function fetchWithFilter(filterValue) {
      return () => {
          dispatch(fetchMovies({
            params: {
              filter: filterValue,
              sortBy: 'title',
              sortOrder: 'asc',
            },
          }));
          dispatch(setCategory(filterValue !== undefined ? filterValue : 'All'));
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
