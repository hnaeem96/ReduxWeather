import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    let myLatLng = { lat: this.props.lat, lng: this.props.lon }

    const Map = new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: myLatLng
    });

    new google.maps.Marker({
      position: myLatLng,
      map: Map,
      title: this.props.name,
      icon: '../icons/Smile.png'
    })
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
