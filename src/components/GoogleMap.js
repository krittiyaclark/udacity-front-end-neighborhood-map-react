import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const GoogleMapDisplay = compose(
    withProps({
        googleMapURL : 
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place" +
    "s&key=AIzaSyCpWg0wtatuKxKQ86H2T2W5rtwc_S51XYE",
        loadingElement: <div style={{ height: "100vh", width: "100%" }} />,
        containerElement: <div style={{ height: "100vh", width: "100%" }} />,
        mapElement: <div style={{ height: "100vh", width: "100%" }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => {
    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 52.370216, lng: 4.895168 }}
        >
            {props.children} />}
        </GoogleMap>
    );
});

export default GoogleMapDisplay;