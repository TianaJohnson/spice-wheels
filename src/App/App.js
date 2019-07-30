import Header from './../Header/Header';
import React, { Component } from 'react';
import Home from './../Home/Home';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App-main">
      <Route
              exact
              path="/home"
              component={Home}
            />
      </div>
    </Router>
  );
}

export default App;
