import React, {Component} from 'react';
import styles from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <main className={styles.Content}>
                {this.props.children}
            </main>
        );
    }
}

export default Layout;
