import React from 'react';

import './moviedetails.css';
import search from '../../img/search.svg';

const MovieDetails = () => {
  return (
    <div className="details-background">
      <div className="details-layout">
        <div className="details-header">
          <p>
            <b>netflix</b>
            roulette
          </p>
          <img className="search-icon" src={search} alt="more" />
        </div>
        <div className="image-and-details">
          <img className="movie-image" src="https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg" alt="Movie title" />
          <div className="card-details">
            <div className="detail-with-rating">
              <h1>Pulp Fiction</h1>
              <p className="rating">4.3</p>
            </div>
            <p>Oscar winning movie</p>
            <div className="year-and-duration">
              <div>1994</div>
              <div className="duration">154 min</div>
            </div>
            <div className="description">
              Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino,
              who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis,
              Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.
              The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century,
              known for their graphic violence and punchy dialogue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
