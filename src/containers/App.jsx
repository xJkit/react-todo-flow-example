// @flow

import React, { Component } from 'react';
import { Header } from '../components';
// import logo from '../assets/logo.svg';
import styles from '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header title="記帳寶" />
      </div>
    );
  }
}

export default App;
