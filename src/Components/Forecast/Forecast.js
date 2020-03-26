import React from "react";
import styles from './Forecast.module.css';

// Display data
const Forecast = (props) => {
   let data = props.data;
  return (
    <div className={styles.Forecast}>
        <div>{data.temp} {data.main}</div>
        <div>{data.description} throughout the day</div>
        <div>Feels Like - {data.feelsLike}</div>
        <div>Low - {data.tempMin}</div>
        <div>High - {data.tempMax}</div>
        <div>Pressure - {data.pressure}</div>
        <div>Wind Speed - {data.wind.speed}</div>
        <div>Wind Direction - {data.wind.degrees} degrees</div>
    </div>
  );
};

export default Forecast;
