import React, { Component } from 'react';
import './App.css';
import './sass/app.scss';

import Top from './componets/Top/Top';
import axios from 'axios';

import Day from './componets/bot/Day';
const WEATHER_KEY = '3301686ba6c043babc3215451192003';

class App extends Component {
  state = {
    cityName: 'New York',
    forcastDays: 5,
    isLoading: true,
    forecast: []
  };
  updateWeather() {
    const { cityName, forcastDays } = this.state;
    const URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}  &q=${cityName} &days=${forcastDays}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          name: data.location.name,
          temp_f: data.current.temp_f,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          forecast: [
            {
              date: data.forecast.forecastday[0].date,
              maxTemp: data.forecast.forecastday[0].day.maxtemp_f,
              avgTemp: data.forecast.forecastday[0].day.avgtemp_f,
              minTemp: data.forecast.forecastday[0].day.mintemp_f,
              icon: data.forecast.forecastday[0].day.condition.icon
            },
            {
              date: data.forecast.forecastday[1].date,
              maxTemp: data.forecast.forecastday[1].day.maxtemp_f,
              avgTemp: data.forecast.forecastday[1].day.avgtemp_f,
              minTemp: data.forecast.forecastday[1].day.mintemp_f,
              icon: data.forecast.forecastday[1].day.condition.icon
            },
            {
              date: data.forecast.forecastday[2].date,
              maxTemp: data.forecast.forecastday[2].day.maxtemp_f,
              avgTemp: data.forecast.forecastday[2].day.avgtemp_f,
              minTemp: data.forecast.forecastday[2].day.mintemp_f,
              icon: data.forecast.forecastday[2].day.condition.icon
            },
            {
              date: data.forecast.forecastday[3].date,
              maxTemp: data.forecast.forecastday[3].day.maxtemp_f,
              avgTemp: data.forecast.forecastday[3].day.avgtemp_f,
              minTemp: data.forecast.forecastday[3].day.mintemp_f,
              icon: data.forecast.forecastday[3].day.condition.icon
            },
            {
              date: data.forecast.forecastday[4].date,
              maxTemp: data.forecast.forecastday[4].day.maxtemp_f,
              avgTemp: data.forecast.forecastday[4].day.avgtemp_f,
              minTemp: data.forecast.forecastday[4].day.mintemp_f,
              icon: data.forecast.forecastday[4].day.condition.icon
            }
          ]
        });
      })
      .catch(err => {
        if (err) console.error('Cannot fetch Weather Data from API, ', err);
      });
  }
  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on('updateWeather', data => {
      this.setState({ cityName: data }, () => this.updateWeather());
    });
  }
  render() {
    const {
      cityName,
      temp_f,
      isDay,
      text,
      iconURL,
      isLoading,
      name
    } = this.state;

    function updateTime() {
      var now = new Date();
      gettimeofday(now.getHours());
    }
    let timeOfDayColor = '';
    let borderColor = '';
    function gettimeofday(now) {
      let hour = now;

      // eslint-disable-next-line default-case
      switch (hour) {
        case 0:
          timeOfDayColor = '#1A237E';
          borderColor = '#67a8f1';
          break;
        case 1:
          timeOfDayColor = '#1A237E';
          borderColor = '#67a8f1';
          break;
        case 2:
          timeOfDayColor = '#1A237E';
          borderColor = '#67a8f1';
          break;
        case 3:
          timeOfDayColor = '#283593';
          borderColor = '#67a8f1';
          break;
        case 4:
          timeOfDayColor = '#303F9F';
          borderColor = '#67a8f1';
          break;
        case 5:
          timeOfDayColor = '#3949AB';
          borderColor = '#67a8f1';
          break;
        case 6:
          timeOfDayColor = '#3F51B5';
          borderColor = '#67a8f1';
          break;
        case 7:
          timeOfDayColor = '#F57F17';
          borderColor = '#7a6021';
          break;
        case 8:
          timeOfDayColor = '#F9A825';
          borderColor = '#7a6021';
          break;
        case 9:
          timeOfDayColor = '#FBC02D';
          borderColor = '#7a6021';
          break;
        case 10:
          timeOfDayColor = '#FDD835';
          borderColor = '#7a6021';
          break;
        case 11:
          timeOfDayColor = '#FFEB3B';
          borderColor = '#7a6021';
          break;
        case 12:
          timeOfDayColor = '#FFEB3B';
          borderColor = '#7a6021';
          break;
        case 13:
          timeOfDayColor = '#FFEB3B';
          borderColor = '#7a6021';
          break;
        case 14:
          timeOfDayColor = '#FFEB3B';
          borderColor = '#7a6021';
          break;
        case 15:
          timeOfDayColor = '#FDD835';
          borderColor = '#7a6021';
          break;
        case 16:
          timeOfDayColor = '#FBC02D';
          borderColor = '#7a6021';
          break;
        case 17:
          timeOfDayColor = '#F9A825';
          borderColor = '#7a6021';
          break;
        case 18:
          timeOfDayColor = '#F57F17';
          borderColor = '#7a6021';
          break;
        case 19:
          timeOfDayColor = '#3F51B5';
          borderColor = '#67a8f1';
          break;
        case 20:
          timeOfDayColor = '#3949AB';
          borderColor = '#67a8f1';
          break;
        case 21:
          timeOfDayColor = '#303F9F';
          borderColor = '#67a8f1';
          break;
        case 22:
          timeOfDayColor = '#283593';
          borderColor = '#67a8f1';
          break;
        case 23:
          timeOfDayColor = '#1A237E';
          borderColor = '#67a8f1';
          break;
        case 24:
          timeOfDayColor = '#1A237E';
          borderColor = '#67a8f1';
          break;
      }
      borderColor = '#67a8f1';
    }
    //Start the loop going based of real time
    updateTime();
    var timeloop = setInterval(updateTime, 1000);

    return (
      <div
        className="app-container"
        style={{ backgroundColor: timeOfDayColor, transitionDelay: '1800s' }}
      >
        <div className="main-container">
          {isLoading && <h3>loading...</h3>}
          {!isLoading && (
            <React.Fragment>
              <div className="top-section">
                <Top
                  name={name}
                  borderColor={borderColor}
                  location={cityName}
                  temp_f={temp_f}
                  isDay={isDay}
                  text={text}
                  iconURL={iconURL}
                  eventEmitter={this.props.eventEmitter}
                />
              </div>
              <div className="bot-section">
                {this.state.forecast.map((x, index) => {
                  return (
                    <Day
                      borderColor={borderColor}
                      key={index}
                      date={x.date}
                      avgTemp={x.avgTemp}
                      maxTemp={x.maxTemp}
                      minTemp={x.minTemp}
                      icon={x.icon}
                    />
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
