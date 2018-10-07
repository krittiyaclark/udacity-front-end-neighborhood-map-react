import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import "./App.css";
import GoogleMapDisplay from "./components/GoogleMap";
import Panel from "./components/Panel/MainContainer";

class App extends Component {
  state = {
    centerPosition: {
      lat: 40.712776,
      lng: -74.005974
    },
    venues: [],
    targetedVenue: {},
    isMarkerShown: false,
    isInfoWindowOpen: false,
    isBouncing: false,
    searchTerm: ""
  };
   
    // Fetch listings DidMount
    componentDidMount() {
      this.fetchListings();
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
        `${fsAPI}?ll=${this.state.centerPosition.lat},${
          this.state.centerPosition.lng
        }
        &client_id=${clientId}&client_secret=${clientSecret}
        &v=${version}&limit=${limit}&browse&categoryId=${categoryId}
        &radius=${radius}`
      ).then(
        function(res) {
          return res.json();
        }).then(function(res) {
          venues = res.response.venues;
        })
        .catch(function(err) {
          alert(`Cannot fetch data. Error: ${err}`)
        });

      // Upon return of the venues, set the object in state
      await this.setState({
        venues: venues
      });
  };

  // Set the search term in state
  setSearchTerm = term => {
    this.setState({
      searchTerm: term
    })
  }
  
  // Toggle the InfoWindow open and make it bounce
  toggleInfoWindow = venue => {
    if (venue === this.state.targetedVenue) {
      this.setState({
        targetedVenue: venue,
        isInfoWindowOpen: !this.state.isInfoWindowOpen,
        isBouncing: !this.state.isBouncing
      });
    } else {
      this.setState({
        targetedVenue: venue
      });
    }
  };

  // Display the Markers on the map
  displayMarkers = () => {
    // Copy the venues object
    const venues = Object.assign({}, this.state.venues);
    let markerList = [];
    if (!!venues) {
      // Filter the venues based on the search term
      Object.values(venues)
        .filter(
          venue =>
            venue.name
              .toLowerCase()
              .indexOf(this.state.searchTerm.toLowerCase()) >= 0
        )
        // Create a marker for each venue in the venue list
        .map(venue => {
          return markerList.push(
            <Marker
              key={venue.id}
              position={{ lat: venue.location.lat, lng: venue.location.lng }}
              onClick={() => this.toggleInfoWindow(venue)}
              animation={
                this.state.isBouncing &&
                  this.state.targetedVenue.id === venue.id
                  ? 1
                  : 0
              }
            >
              {this.state.targetedVenue.id === venue.id &&
                (this.state.isInfoWindowOpen && (
                  <InfoWindow onCloseClick={() => this.toggleInfoWindow(venue)}>
                    <React.Fragment>
                      <h3>{venue.name}</h3>
                      <p>Type: {venue.categories[0].shortName}</p>
                    </React.Fragment>
                  </InfoWindow>
                ))}
            </Marker>
          );
        });
      return markerList;
    }
  };
  
  render() {
    return (
      <div className="App">
        <Panel 
          venues={this.state.venues} 
          toggleInfoWindow={this.toggleInfoWindow} 
          searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} 
        />
        <GoogleMapDisplay>{this.displayMarkers()}</GoogleMapDisplay>
      </div>
    );
  }
}

export default App;