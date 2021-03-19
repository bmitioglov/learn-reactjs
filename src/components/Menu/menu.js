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
    
    return (
      <ul className="menu">
        <li>
            <button onClick={() => dispatch(fetchMovies())}>All</button>
        </li>
        <li>
            <button onClick={fetchWithFilter('Documentary')}>Documentary</button>
        </li>
        <li>
            <button onClick={fetchWithFilter('Comedy')}>Comedy</button>
        </li>
        <li>
            <button onClick={fetchWithFilter('Horror')}>Horror</button>
        </li>
        <li>
            <button onClick={fetchWithFilter('Crime')}>Crime</button>
        </li>
      </ul>
    );
};

export default Menu;
