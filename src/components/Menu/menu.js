import React from 'react';
import './menu.css';
import { useDispatch } from 'react-redux';
import { fetchMovies, setCategory } from '../../reducers/movieSlice';
import { useHistory } from 'react-router-dom';

const Menu = ({ menuClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  function fetchWithFilter(filterValue) {
      return () => {
        menuClick();
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
