import React, { Component } from 'react';
import PropTypes from 'prop-types';

//--- This component represents a single house on the map
export default class House extends Component {
  render() {
    return (
      <li>{this.props.house.text}</li>
    );
  }
}

House.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  house: PropTypes.object.isRequired,
};
