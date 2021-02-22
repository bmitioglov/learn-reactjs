import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FooterLayout from './components/FooterLayout/footerlayout';
import Header from './components/Header/header';
import MenuPanel from './components/MenuPanel/menupanel';
import MoviesList from './containers/MoviesList/movieslist';
import Search from './components/Search/search';
import Content from './components/ContentLayout/contentlayout';
import SearchResult from './components/SearchResultCounter/searchresultcounter';

const App = () => (
  <Content>
    <Header />
    <Search />
    <MenuPanel />
    <SearchResult searchResult={30} />
    <MoviesList />
    <FooterLayout>
      <p>
        <b>
          netflix
        </b>
        roulette
      </p>
    </FooterLayout>
  </Content>
);

ReactDOM.render(<App />, document.getElementById('app'));
