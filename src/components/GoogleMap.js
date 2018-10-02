import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMapDisplay = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCpWg0wtatuKxKQ86H2T2W5rtwc_S51XYE",
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100vh` }} />
  }),
  withScriptjs, 
  withGoogleMap
)((props) => {
  return <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 36.372659, lng: -94.208742 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 36.372659, lng: -94.208742 }} />}
  </GoogleMap>
})
 export default GoogleMapDisplay;