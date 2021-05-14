import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Footer from './components/FooterLayout/footer';
import Header from './components/Header/header';
import MenuPanel from './components/MenuPanel/menupanel';
import MoviesList from './containers/MoviesList/movieslist';
import Search from './components/Search/search';
import Content from './components/ContentLayout/contentlayout';
import SearchResult from './components/SearchResultCounter/searchresultcounter';
import ErrorBoundary from './containers/ErrorBoundary/errorboundary';
import Movieslayout from './components/MoviesLayout/movieslayout';
import MovieDetails from './components/MovieDetails/moviedetails';
import useDocumentTitle from './components/useDocumentTitle/usedocumenttitle';
import { selectTotalFoundMovies, selectShowMovieHeader } from './reducers/movieSlice';

import store from './store/store';
import Notfoundpage from './components/notfoundpage/notfoundpage';

const App = () => {
  
  const totalFoundMovies = useSelector(selectTotalFoundMovies);
  const showMovieHeader = useSelector(selectShowMovieHeader);
  
  const Home = () => {
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
        <Movieslayout>
          <ErrorBoundary>
            <MoviesList/>
          </ErrorBoundary>
        </Movieslayout>
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
  
  const title = 'Netflix Roulette';
  useDocumentTitle(title);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Home} />
        <Route component={Notfoundpage} />
      </Switch>
    </Router>
  );
};

export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // document.getElementById('app'),
);
