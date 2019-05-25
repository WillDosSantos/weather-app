import React from "react";

const Weather = props => (
  <div className="weather-widget-container">
    <div className="weather-temp">
      {props.tempurature && (
        <h1>
          {props.tempurature}
          <span className="degree-circle" />
        </h1>
      )}
    </div>
    <div className="weather-details">
      {props.city && props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  </div>
);

export default Weather;
