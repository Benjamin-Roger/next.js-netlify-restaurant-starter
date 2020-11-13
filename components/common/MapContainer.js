import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

import config from "config";

const mapStyles = {
  width: "100%",
  height: "100%",
};


// Get the coordinates from the map field in general settings
const {coordinates} = JSON.parse(config.map);


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat:coordinates[1],
            lng:coordinates[0]
          }}
        >
          <Marker onClick={this.onMarkerClick} name={config.name} address={config.address} />
          
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="p-3">
              <p>{this.state.selectedPlace.name}</p>
              <p>{this.state.selectedPlace.address}</p>
            </div>
          </InfoWindow>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.googleMapsAPIKey,
})(MapContainer);
