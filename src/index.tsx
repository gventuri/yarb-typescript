import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './modules';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
