import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Scoreboard';

class App extends Component {
  componentDidMount() {
    const Snowflakes = require('magic-snowflakes');
    new Snowflakes({color:'#eef'})
  }

  render() {
    return (
      <Scoreboard/>
    );
  }
}

export default App;
