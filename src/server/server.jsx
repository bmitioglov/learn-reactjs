import qs from 'qs'; // Add this at the top of the file
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { combineReducers, applyMiddleware, createStore } from 'redux';

import movieReducer from '../../src/reducers/movieSlice';
import App from '../App';
import {StaticRouter} from 'react-router';

const moviesReducer = combineReducers({
  movie: movieReducer,
});

function renderHTML(html, preloadedState) {
  /* eslint-disable */
  return `
      <!doctype html>
      <html lang='en'>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${
    process.env.NODE_ENV === 'development'
      ? ''
      : '<link href="/public/main.css" rel="stylesheet" type="text/css">'
  }
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
          </script>
          <script src="/dist/js/main.js"></script>
          <link rel="stylesheet" href="main.css">
        </body>
      </html>
  `;
  /* eslint-enable */
}

export default function serverRenderer() {
  return (req, res) => {
    const params = qs.parse(req.query);
  
  
  
    const store = createStore(moviesReducer)
  
    // Render the component to a string
    const renderRoot = () => renderToString(
      <Provider store={store}>
        <StaticRouter>
          <App />
        </StaticRouter>
      </Provider>
    )
    
    // Create a new Redux store instance
    // const store = createStore(rootReducer, applyMiddleware(thunk));
    const preloadedState = store.getState();
    
    renderToString(renderRoot());
    
    const htmlString = renderToString(renderRoot());
    
    res.send(renderHTML(htmlString, preloadedState));
  };
}
