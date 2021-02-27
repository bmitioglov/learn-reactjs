import React from 'react';
import MovieCard from '../../components/MovieCard/moviecard';
import './movieslist.css';
import { movies } from './moviessource';

const MoviesList = () => (
  <div className="movies-list">
    {movies.map((item) => (
      <MovieCard
        className="movie-card"
        key={item.id}
        title={item.title}
        description={item.description}
        year={2020}
      />
    ))}
  </div>
);

export default MoviesList;
