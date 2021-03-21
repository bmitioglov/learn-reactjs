import React from 'react';
import './menu.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../reducers/movieSlice';

const Menu = () => {
    const dispatch = useDispatch();
    function fetchWithFilter(filterValue) {
      return () => dispatch(fetchMovies({
        params: {
          filter: filterValue,
        },
      }));
    }
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    return (
      <ul className="menu">
        {
          genres.map((genre) => (
            <li>
              <button type="button" onClick={fetchWithFilter(genre !== 'All' ? genre : undefined)}>{genre}</button>
            </li>
          ))
        }
      </ul>
    );
};

export default Menu;
