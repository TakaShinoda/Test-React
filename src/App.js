import React, { Component } from 'react';
import Count from './Count';
import Name from './Name';
import Message from './Message';
import Alert from './Alert';

class App extends Component {
  render() {
    return (
      <div>
        <h1>みやだいもうくん</h1>
        <Count />
        <Name />
        <Message message = '宮崎へ' />
        <Alert />
      </div>
    );
  }
}

export default App;
