import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%',
  borderRadius: '0px'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 45.915969,
          lng: 19.768924
        }}
        zoom={16}>

        <Marker title={'Zilahy Lajos 1 | Magyarkanizsa'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4dL_0Z0yYpw6jd58XBhLcxXQ5qNs20Hk"
})(MapContainer)