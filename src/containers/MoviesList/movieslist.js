import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../../components/MovieCard/moviecard';
import './movieslist.css';
import {selectAllMovies, fetchMovies, selectCategory} from '../../reducers/movieSlice';
import { useLocation } from 'react-router';

const MoviesList = ({ onMovieClick }) => {
  
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  
  const responseStatus = useSelector((state) => {
    return state.movies.status;
  });
  
  const location = useLocation();
  
  const urlValue = location.search;
  const searchValue = new URLSearchParams(urlValue).get('search');
  
  const category = useSelector((state) => selectCategory(state));
  
  //TODO: fix
  useEffect(() => {
    console.log(urlValue);
    console.log('useEffect!');
    const params = {
        params: {
          sortBy: 'title',
          sortOrder: 'asc',
          search: searchValue,
          searchBy: 'title',
          filter: category !== 'All' ? category : undefined,
        },
      };
      dispatch(fetchMovies(params));
  }, [urlValue]);
  
  if (responseStatus === 'loading') return <div className="loader">Loading...</div>;
  return (
    <div className="movies-list">
      {
        movies.map((item) => (
          <MovieCard
            className="movie-card"
            key={item.id}
            id={item.id}
            title={item.title}
            description={(item.genres !== undefined && item.genres.length !== 0) ? item.genres.join(', ') : ''}
            year={item.release_date.split('-')[0]}
            image={item.poster_path}
            releaseDate={item.release_date}
            runtime={item.runtime}
            genres={item.genres}
            overview={item.overview}
            onClick={onMovieClick}
          />
      ))}
    </div>
  );
};

export default React.memo(MoviesList);
