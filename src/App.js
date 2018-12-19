import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './Scoreboard';

class App extends Component {
  componentDidMount() {
    new require('magic-snowflakes')({color:'#eef'})
  }

  render() {
    return (
      <Scoreboard/>
    );
  }
}

export default App;
