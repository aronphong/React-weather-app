import React, { Component } from 'react';
import styles from './Form.module.css';

const Form = (props) => {

    const getInput = () => {
        let userInput = document.getElementsByTagName('input')[0].value;
        props.getLocation(userInput);
    };

    const handleSearch = () => {
        if (props.location === "") {
            document.getElementsByTagName('input')[0].focus();
            return;
        };
        props.searchWeather();
    };

    return (
        <div className={styles.Form}>
            <input
                autoFocus 
                className={styles.search} 
                type="text"
                maxLength="35" 
                onChange={getInput}
                value={props.location}
                placeholder="Enter City name"  
            />
        <button onClick={props.switchUnits}>{props.units}</button>
        <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Form;
