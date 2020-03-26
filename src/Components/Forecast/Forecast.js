import React from "react";
import styles from './Forecast.module.css';

// Display data
const Forecast = (props) => {
  let data = props.data;
  let units = props.units === "imperial" ? "\u00b0F" : "\u00b0C";
  return (
    <div className={styles.Forecast}>
        <div className={styles.name}>{data.name}</div>
        <div>{data.temp}{units} - {data.main}</div>
        <div>{data.description} throughout the day</div>
        <div>
          <p>Feels Like - {data.feelsLike}{units}</p>
          <p>Low - {data.tempMin}{units}</p>
          <p>High - {data.tempMax}{units}</p>          
        </div>

        {/* <div>Pressure - {data.pressure}</div> */}
        <div>Wind Speed - {data.wind.speed}</div>
        <div>Wind Direction - {data.wind.degrees}{'\u00b0'}</div>
    </div>
  );
};

export default Forecast;
