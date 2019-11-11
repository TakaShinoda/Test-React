import React, { Component } from 'react';
import Count from './Count';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>みやだいもうくん</h1>
        <Count />
        <Form />
      </div>
    );
  }
}

export default App;
