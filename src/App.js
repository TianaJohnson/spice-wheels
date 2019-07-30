import Header from './Header/Header';
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';

function App() {
  return (

    <div className="App-main">
      <Header />
    </div>
  );
}

export default App;
