import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import moviesReducer from '../reducers/movieSlice';
import App from '../App';

const app = Express();
const port = 3000

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(moviesReducer)
  
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  
  // Grab the initial state from our Redux store
  const preloadedState = store.getState()
  
  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}


function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link href="/css/main.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
        </script>
        <script src="/js/main.js"></script>
        <link rel="stylesheet" href="main.css">
      </body>
    </html>
    `
}

app.listen(port)
