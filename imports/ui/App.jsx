import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import { Houses } from '../api/houses.jsx';
import House from './House.jsx';

class App extends Component {
  //--- Function that collects all houses, and maps them to components
  renderHouses() {
    return this.props.houses.map((house) => (
      <House key={house._id} house={house} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Housing Map</h1>
        </header>

        <Map center={[0, 0]} zoom={2}>
          <TileLayer
            url='altis/{z}/{x}/{y}.png'
            minZoom={1}
            maxZoom={7}
            noWrap={true}
            attribution='ArrogantBread (Map) & Ciaran Langton (Backend)'
            tms={true}
          />
        {this.renderHouses()}
        </Map>
      </div>
    );
  }
}

App.propTypes = {
  houses: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    houses: Houses.find({}).fetch(),
  };
}, App);
