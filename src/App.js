import React, { Component } from "react";
import { Marker } from "react-google-maps";
import "./App.css";
import GoogleMapDisplay from "./components/GoogleMap";
import Panel from "./components/Panel/MainContainer";

class App extends Component {
  state = {
    centerPosition: {
      lat: 52.370216,
      lng: 4.895168
    },
    venues: [],
    targetedVenue: {},
    isMarkerShown: false
  };
  
   componentDidMount() {
    this.fetchListings();
  }

   toggleMarker = (venue) => {
    this.setState({
      targetedVenue: venue,
      isMarkerShown: true
    })
  }
  
   fetchListings = async () => {
    const fsAPI = "https://api.foursquare.com/v2/venues/search";
    const clientId = "A44YC34354YRGZIKO2RHCTOAGHVHSZYLOMCCAWHNZPC3QF0Y";
    const clientSecret = "CKFJAYYHQUXL3TEYRVJKND1Q4G3PLIUSV3TWGPLQGG4OS3WH";
    const version = "20180615";
    const limit = "20";
    const categoryId = "4d4b7105d754a06374d81259";
    const radius = "300";
    let venues = [];
     
    await fetch(
      `${fsAPI}?ll=${this.state.centerPosition.lat},${this.state.centerPosition.lng}
      &client_id=${clientId}&client_secret=${clientSecret}
      &v=${version}&limit=${limit}&browse&categoryId=${categoryId}
      &radius=${radius}`
    ).then(
      function(res) {
      return res.json();
    }).then(function(res) {
      venues = res.response.venues;
    });
    
     await this.setState({
      venues: venues
    });
  };
  
  render() {
    return (
      <div className="App">
        <Panel venues={this.state.venues} toggleMarker={this.toggleMarker} />
        <GoogleMapDisplay isMarkerShown>
          {this.state.isMarkerShown && <Marker position={{ lat: this.state.targetedVenue.location.lat, lng: this.state.targetedVenue.location.lng }} />}
        </GoogleMapDisplay>
      </div>
    );
  }
}

export default App;