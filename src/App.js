import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, useSelector } from 'react-redux';

import Footer from './components/FooterLayout/footer';
import Header from './components/Header/header';
import MenuPanel from './components/MenuPanel/menupanel';
import MoviesList from './containers/MoviesList/movieslist';
import Search from './components/Search/search';
import Content from './components/ContentLayout/contentlayout';
import SearchResult from './components/SearchResultCounter/searchresultcounter';
import ErrorBoundary from './containers/ErrorBoundary/errorboundary';
import MoviesLayout from './components/MoviesLayout/movieslayout';
import MovieDetails from './components/MovieDetails/moviedetails';
import useDocumentTitle from './components/useDocumentTitle/usedocumenttitle';
import { selectTotalFoundMovies } from './reducers/movieSlice';

import store from './store/store';

const App = () => {
  const [showMovieHeader, setShowMovieHeader] = useState(false);
  
  const toggleMovieHeader = useCallback(() => setShowMovieHeader((prevValue) => !prevValue), []);
  
  const totalFoundMovies = useSelector(selectTotalFoundMovies);
  
  const title = 'Netflix Roulette';
  useDocumentTitle(title);
  
  return (
    <Content>
      { showMovieHeader
        ? (
          <MovieDetails />
        )
        : (
          <>
            <Header />
            <Search />
          </>
        )}
      <MenuPanel />
      <SearchResult searchResult={totalFoundMovies} />
      <MoviesLayout>
        <ErrorBoundary>
          <MoviesList onMovieClick={toggleMovieHeader} />
        </ErrorBoundary>
      </MoviesLayout>
      <Footer>
        <p>
          <b>
            netflix
          </b>
          roulette
        </p>
      </Footer>
    </Content>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
