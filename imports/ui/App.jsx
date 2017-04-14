import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import House from './House.jsx';

// App component - represents the whole app
export default class App extends Component {
  getHouses() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderHouses() {
    return this.getHouses().map((house) => (
      <House key={house._id} task={house} />
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
            attribution='Created By ArrogantBread'
            tms={true}
          />
        </Map>
      </div>
    );
  }
}
