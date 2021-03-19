import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../../components/MovieCard/moviecard';
import './movieslist.css';
import { selectAllMovies, fetchMovies } from '../../reducers/movieSlice';

const MoviesList = ({ onMovieClick }) => {
  
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  
  const responseStatus = useSelector((state) => {
    return state.movies.status;
  });
  
  useEffect(() => {
    if (responseStatus === 'idle') {
      const params = {
        params: {
          // filter: 'animation, comedy',
          sortBy: 'title',
          sortOrder: 'asc',
        },
      };
      dispatch(fetchMovies(params));
    }
  }, [responseStatus, dispatch]);
  
  if (responseStatus === 'loading') return <div className="loader">Loading...</div>;
  return (
    <div className="movies-list">
      {
        movies.map((item) => (
          <MovieCard
            className="movie-card"
            key={item.id}
            title={item.title}
            description={item.genres.join(', ')}
            year={item.release_date.split('-')[0]}
            image={item.poster_path}
            onClick={onMovieClick}
          />
      ))}
    </div>
  );
};

export default React.memo(MoviesList);
