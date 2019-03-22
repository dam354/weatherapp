import React, { Component } from 'react';
import './Weather.scss';
class Weather extends Component {
  state = {};
  render() {
    const { name, temp_f, isDay, text, iconURL } = this.props;

    return (
      <div className="weather-container">
        {/* <div className="location">{location}</div> */}
        <div className="title">Right now in {name}</div>
        <div className="image">
          <img src={iconURL} alt="" />
        </div>
        <div className="temp">{Math.floor(temp_f)}&deg;</div>

        <div className="status">{text}</div>
      </div>
    );
  }
}

export default Weather;
