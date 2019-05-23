import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Location: {this.props.city}, {this.props.country}
        </h1>
        <h1>Tempurature: {this.props.tempurature}</h1>
        <h1>Humidity: {this.props.humidity}</h1>
        <h1>Conditions: {this.props.description}</h1>
      </div>
    );
  }
}

export default Weather;
