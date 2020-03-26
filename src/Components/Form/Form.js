import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {

    getInput = () => {
        let userInput = document.getElementsByTagName('input')[0].value;
        this.props.getLocation(userInput);
    }

    render () {
        return (
            <React.Fragment>
                <input 
                    className={styles.search} 
                    type="text"
                    maxLength="35" 
                    placeholder="Enter City, State, Country" 
                    value={this.props.location} 
                    onChange={this.getInput}/>
                <button onClick={this.getInput}>Search</button>
            </React.Fragment>

        );
    }
};

export default Form;
