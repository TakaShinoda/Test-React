import React, { Component } from 'react';
import Count from './Count';
import Name from './Name';

class App extends Component {
  render() {
    return (
      <div>
        <h1>みやだいもうくん</h1>
        <Count />
        <Name />
      </div>
    );
  }
}

export default App;
