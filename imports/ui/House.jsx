import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup, TileLayer } from 'react-leaflet';

//--- This component represents a single house on the map
export default class House extends Component {
  render() {
    return (
      <Marker position={[this.props.house.lat, this.props.house.lng]}>
        <Popup>
          <span>
            /*{this.props.house.name}*/test
          </span>
        </Popup>
      </Marker>
    );
  }
}

House.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  house: PropTypes.object.isRequired,
};
