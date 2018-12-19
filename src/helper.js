// helper.js
import axios from 'axios';

// CORS enabled apikey
const apikey = process.env.REACT_APP_RESTDB_KEY;

// REST endpoint
let restdb = axios.create({
  baseURL: '/',
  timeout: 5000,
  headers: { 'x-apikey': apikey }
});

// Eventsource endpoint
const realtimeURL = `https://scoreboard-ec2a.restdb.io/realtime?apikey=${apikey}`

export {apikey, restdb, realtimeURL};
