import React, { Component } from 'react';
import './Top.scss';
import Weather from './Weather/Weather';

import { Manager, Reference, Popper } from 'react-popper';

class Top extends Component {
  state = {
    isSelectLocationOpen: false
  };

  onToggleLocation() {
    this.setState((prevState, props) => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  }
  onToggleSelectLocation() {
    this.setState(prevState => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  }

  onLocationNameChange(e) {
    this.setState({
      locationName: e.target.value
    });
  }

  onSelectCity() {
    const { locationName } = this.state;
    const { eventEmitter } = this.props;
    eventEmitter.emit('updateWeather', locationName);
    this.setState({ isSelectLocationOpen: false });
  }
  render() {
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
    const { temp_f } = this.props;
    let colorIndex = Math.floor(temp_f / 10);
    if (colorIndex > 10) {
      colorIndex = 10;
    }
    if (colorIndex < 0) {
      colorIndex = 0;
    }

    const { isSelectLocationOpen } = this.state;
    return (
      <React.Fragment>
        <div
          className="top-container"
          style={{
            backgroundColor: colors[colorIndex],
            borderColor: this.props.borderColor
          }}
        >
          <Weather {...this.props} />

          <Manager>
            <Reference>
              {({ ref }) => (
                <button
                  className="btn btn-select-location"
                  ref={ref}
                  onClick={this.onToggleSelectLocation.bind(this)}
                >
                  Select Location
                </button>
              )}
            </Reference>
            <Popper placement="top">
              {({ ref, style, placement, arrowProps }) =>
                isSelectLocationOpen && (
                  <div
                    className="popup-container"
                    ref={ref}
                    style={style}
                    data-placement={placement}
                  >
                    <div className="form-container">
                      <input
                        id="location-name"
                        type="text"
                        placeholder="City Name or Area Code"
                        onChange={this.onLocationNameChange.bind(this)}
                      />
                      <button
                        className="btn btn-select-location-in"
                        onClick={this.onSelectCity.bind(this)}
                      >
                        Select
                      </button>
                    </div>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </div>
                )
              }
            </Popper>
          </Manager>
        </div>
      </React.Fragment>
    );
  }
}

export default Top;
