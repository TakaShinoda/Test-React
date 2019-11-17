import React, { Component } from 'react';
import Count from './Count';
import Name from './Name';
import Alert from './Alert';

class App extends Component {
  render() {
    return (
      <div>
        <h1>みやだいもうくん</h1>
        <Count />
        <Name />
        <Alert message ='foo' />
      </div>
    );
  }
}

export default App;
