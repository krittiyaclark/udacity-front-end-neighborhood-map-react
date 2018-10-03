import React, { Component } from "react";
import "./App.css";
import GoogleMapDisplay from "./components/GoogleMap";
import Panel from "./components/Panel/MainContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel />
        <GoogleMapDisplay isMarkerShown />
      </div>
    );
  }
}

export default App;