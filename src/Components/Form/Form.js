import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {

    getInput = () => {
        let userInput = document.getElementsByTagName('input')[0].value;
        this.props.getLocation(userInput);
    }

    handleSearch = () => {
        if (this.props.location === "") {
            return;
        }
        this.props.searchWeather();
    };

    render () {
        return (
            <React.Fragment>
                <input
                    autoFocus 
                    className={styles.search} 
                    type="text"
                    maxLength="35" 
                    onChange={this.getInput}
                    value={this.props.location}
                    placeholder="Enter City name"  />
                <button onClick={this.handleSearch}>Search</button>
            </React.Fragment>
        );
    }
};

export default Form;
