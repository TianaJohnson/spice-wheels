import React, {Component} from 'react';
import Home from '../Home/Home';
import About from './../About/About';
import Contact from '../Contact/Contact';
import Custom from '../Custom/Custom';
import Store from '../Store/Store';

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App-main">
      <Route
              exact
              path="/"
              component={Home}
            />
      <Route
              exact
              path="/about"
              component={About}
            />
      <Route
              exact
              path="/contact"
              component={Contact}
            />
      <Route
              exact
              path="/custom"
              component={Custom}
            />
      <Route
              exact
              path="/store"
              component={Store}
            />
      </div>
    </Router>
  );
}

export default App;
