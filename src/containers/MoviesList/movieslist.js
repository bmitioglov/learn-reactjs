import React from 'react';
import MovieCard from '../../components/MovieCard/moviecard';

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
];

const MoviesList = () => (
  <div>
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
