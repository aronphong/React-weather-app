import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout/Layout';
import Form from './Components/Form/Form';
import Weather from './util/Weather/Weather';
import Titles from './Components/Titles/Titles';
import Forecast from './Components/Forecast/Forecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: "",
      units: "imperial",
      weatherData: null
    }

    this.handleLocation = this.handleLocation.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleWeatherData = this.handleWeatherData.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location !== this.state.location
  }

  handleLocation(str) {
    this.setState({location: str});
  }

  handleUnitChange() {
    const change = (this.state.units === "imperial" ? "metric" : "imperial");
    this.setState({units: change});
  }

  // Get data and save to state
  handleWeatherData() {
    Weather.getWeatherData(this.state.location, this.state.units).then(response => {
      let forecastData = Weather.saveWeatherData(response)
      this.setState({weatherData: forecastData})
    });
  }

  render() {
    let forecast;
    if (this.state.weatherData) {
      forecast = <Forecast data={this.state.weatherData} units={this.state.units} />
    } else {
      forecast = null;
    }

    return (
      <div className="App">
        <Layout>
          <Titles />
          <Form
            location={this.state.location} 
            getLocation={this.handleLocation}
            switchUnits={this.handleUnitChange}
            units={this.state.units}
            searchWeather={this.handleWeatherData}
          />
          {/* <button onClick={this.handleWeatherData}> Click </button> */}
          {forecast}
        </Layout>
      </div>
    );
  }
}

export default App;
