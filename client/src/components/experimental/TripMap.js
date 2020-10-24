import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";





class TripMap extends React.Component {
  render() {

    return (
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(TripMap);
