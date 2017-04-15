import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import linkState from 'react-link-state';

const icon = L.icon({
  iconUrl: 'house.png',
  iconSize:     [20, 20],
  shadowSize:   [20, 20],
  iconAnchor:   [15, 15],
});

//--- This component represents a single house on the map
export default class House extends Component {
  constructor(props) {
    super(props);

    this.state = props.house;
  }

  //--- Call the server to delete.
  deleteHouse() {
    Meteor.call('houses.remove', this.state._id);
  };

  updateHouse(e) {
    e.preventDefault();

    console.log(this.state);
    Meteor.call('houses.update', this.state._id,
      this.state.playerName, this.state.groupName);
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Marker position={position} icon={icon}>
        <Popup minWidth={300} maxWidth={400}>
          <form>
            <FormGroup controlId="form">
              <ControlLabel>Player Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter player name"
                valueLink={linkState(this, 'playerName')}
                />

              <ControlLabel>Group Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Group Name"
                valueLink={linkState(this, 'groupName')}
                />

              <Button type="submit" onClick={this.updateHouse.bind(this)}>Save</Button>
              <Button type="button" onClick={this.deleteHouse.bind(this)}>Delete</Button>
            </FormGroup>
          </form>
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
