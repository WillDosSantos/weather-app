import React from "react";

import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";

const API_KEY = "c7ea035a56d92ba823168db267f64b76";

class App extends React.Component {
  state = {
    tempurature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      tempurature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  };

  render() {
    return (
      <div>
        <Titles />
        <Forms getWeather={this.getWeather} />
        <Weather
          tempurature={this.state.tempurature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
