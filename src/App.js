import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FooterLayout from './components/FooterLayout/footerlayout';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import MoviesList from './containers/MoviesList/movieslist';

const App = () => (
  <>
    <Header />
    <Menu />
    <MoviesList />
    <FooterLayout>
      <p>links</p>
    </FooterLayout>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
