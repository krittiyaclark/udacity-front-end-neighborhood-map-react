import React, { Component } from "react";
import "./App.css";
import GoogleMapDisplay from "./components/GoogleMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="options-panel">
          <section className="panel-header">
            <h1>Neighborhood Map</h1>
            <h4>Eat out in Bentonville, AR!</h4>
          </section>
          <section className="panel-body">
            <section className="search-panel">
              <input type="text" />
              <p>Listings provided by FourSquare API</p>
            </section>
            <ul class="listings">
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </section>
        </section>
        <GoogleMapDisplay isMarkerShown />
      </div>
    );
  }
}

export default App;