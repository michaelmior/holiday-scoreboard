import React, {Component} from 'react';
import EventSource from 'eventsource';
import FlipMove from 'react-flip-move';
import { restdb, realtimeURL } from './helper.js';
import './Scoreboard.css'

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {ping: new Date(), evt: '', scores: []};

    // connect to the realtime database stream
    let eventSource = new EventSource(realtimeURL);

    // check if the realtime connection is dead, reload client if dead
    setInterval(() => {
      let now = new Date().getTime();
      let diff = (now - this.state.ping.getTime()) / 1000;

      // haven't heard from the server in 20 secs?
      if (diff > 20) {
        // hard reload of client
        window.location.reload();
      }
    }, 10000);

    // listen on ping from server, keep time
    eventSource.addEventListener('ping', function(e) {
      this.setState(previousState => {
        return {ping: new Date(e.data)};
      });
    }.bind(this), false);

    // listen for database REST operations
    eventSource.addEventListener('put', (e) => {
      this.getScores()
    }, false);

    eventSource.addEventListener('delete', (e) => {
      this.getScores()
    }, false);

    eventSource.addEventListener('post', (e) => {
      this.getScores();
    }, false);

    eventSource.addEventListener("error", (e) => {
      // typically lost network connection
      console.log("Error", e);
    });

    eventSource.onmessage = (e) => {
      // generic messages
      console.log("Message", e);
    }
  }

  getScores = () => {
    restdb.get("/rest/scores")
      .then(res => {
        let scores = res.data;
        scores.sort((a, b) => b.score - a.score);
        
        this.setState(previousState => {
          return { scores };
        });
      });
  }

  componentDidMount() {
    console.log("Start client");
    this.getScores();
  }

  render() {
    return <div className="board"><FlipMove>
      {this.state.scores.map(team =>
      <div key={team._id} className="row"><span className="name">{team.name}</span> <span className="score">{team.score}</span></div>
      )}
    </FlipMove></div>
  }
}

export default Scoreboard;
