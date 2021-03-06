import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DocumentTitle from 'react-document-title';

import {
  Route,
} from 'react-router-dom'

import { Button } from 'antd-mobile';

import RegisterScreen from './Screen/RegisterScreen';
import BScreen from './Screen/BScreen';

class App extends Component {
  render() {
    return (
      <DocumentTitle title='HomeTitle'>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>Click</Button>
          <Route path={'/RegisterScreen'} component={RegisterScreen} />
          <Route path={'/b'} component={BScreen} />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
