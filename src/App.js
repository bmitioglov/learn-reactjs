import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/FooterLayout/footer';
import Header from './components/Header/header';
import MenuPanel from './components/MenuPanel/menupanel';
import MoviesList from './containers/MoviesList/movieslist';
import Search from './components/Search/search';
import Content from './components/ContentLayout/contentlayout';
import SearchResult from './components/SearchResultCounter/searchresultcounter';
import ErrorBoundary from './containers/ErrorBoundary/errorboundary';
import MoviesLayout from './components/MoviesLayout/movieslayout';
import MovieDetailsHeader from './components/MovieDetailsHeader/moviedetailsheader';

const App = () => {
  const [showMovieHeader, setShowMovieHeader] = useState(false);
  
  const toggleMovieHeader = useCallback(() => setShowMovieHeader((prevValue) => !prevValue), []);
  
  // custom hook
  const useDocumentTitle = (title) => {
    useEffect(
      () => {
        document.title = title;
      },
      [title],
    );
  };
  
  const title = 'Netflix Roulette';
  useDocumentTitle(title);
  
  return (
    <Content>
      { showMovieHeader
        ? (
          <MovieDetailsHeader />
        )
        : (
          <>
            <Header />
            <Search />
          </>
        )}
      <MenuPanel />
      <SearchResult searchResult={30} />
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

ReactDOM.render(<App />, document.getElementById('app'));
