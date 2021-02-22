import React from 'react';
import MovieCard from '../../components/MovieCard/moviecard';
import './movieslist.css';

const movies = [
  {
    title: 'Rick and Morty',
    description: 'Cartoon',
    id: '1',
  },
  {
    title: 'Simpsons',
    description: 'Cartoon',
    id: '2',
  },
  {
    title: 'Gladiator',
    description: 'Movie',
    id: '3',
  },
  {
    title: 'Rick and Morty',
    description: 'Cartoon',
    id: '4',
  },
  {
    title: 'Simpsons',
    description: 'Cartoon',
    id: '5',
  },
  {
    title: 'Gladiator',
    description: 'Movie',
    id: '6',
  },
];

const MoviesList = () => (
  <div className="MoviesList">
    {movies.map((item) => (
      <MovieCard
        className="MovieCard"
        key={item.id}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
);

export default MoviesList;
