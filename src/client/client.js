import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../App'
import moviesReducer from '../reducers/movieSlice';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(moviesReducer, preloadedState)

hydrate(
  <StaticRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </StaticRouter>,
  document.getElementById('app')
)
