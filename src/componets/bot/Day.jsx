import React, { Component } from 'react';
import './Day.scss';
class Day extends Component {
  render() {
    const { date, maxTemp, minTemp, icon, avgTemp, borderColor } = this.props;
    const colors = [
      '#1a237e',
      '#283593',
      '#303f9f',
      '#3949ab',
      '#3f51b5',
      '#ef5350',
      '#f44336',
      '#e53935',
      '#d32f2f',
      '#c62828',
      '#b71c1c'
    ];

    let colorIndex = Math.floor(avgTemp / 10);

    if (colorIndex > 10) {
      colorIndex = 10;
    }
    if (colorIndex < 0) {
      colorIndex = 0;
    }

    let dayMonth = date.split('-');
    dayMonth = dayMonth[1] + '/' + dayMonth[2];

    return (
      <div
        className="day"
        style={{
          backgroundColor: colors[colorIndex],
          borderColor: borderColor
        }}
      >
        <div className="date">{dayMonth}</div>
        <div className="temp">
          L:{Math.floor(minTemp)} H:{Math.floor(maxTemp)}
        </div>

        <img src={icon} alt="" />
      </div>
    );
  }
}

export default Day;
