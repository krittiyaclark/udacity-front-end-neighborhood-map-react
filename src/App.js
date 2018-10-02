import React, { Component } from 'react';
import './App.css';
import GoogleMapDisplay from './components/GoogleMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMapDisplay isMarkerShown />
      </div>
    );
  }
}

export default App;
