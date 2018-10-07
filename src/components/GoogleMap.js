import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const GoogleMapCall = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
        >
            {props.children}
        </GoogleMap>
    ))
);

class GoogleMapDisplay extends Component {
    state = {
        hasError: false
    };

    // The error message is shown if Foursquare API fails to load data
    // define a global function
    gm_authFailure() {
        window.alert("Google Maps error!")
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    // define its working in case of failure
    componentDidMount() {
        window.gm_authFailure = this.gm_authFailure;
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <h2>You might be offline or the service is down.</h2>
                    <h3>Check your internet connection and try again.</h3>
                </div>
            );
        }
        return (
            <GoogleMapCall
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDWDwhwYWGaZlcFkEIpaLuVY6VjjRNph60"
                loadingElement={<div style={{ height: "100vh", width: "100%" }} />}
                containerElement={<div style={{ height: "100vh", width: "100%" }} />}
                mapElement={<div style={{ height: "100vh", width: "100%" }} />}
            >
                {this.props.children}
            </GoogleMapCall>
        );
    }
}

export default GoogleMapDisplay;