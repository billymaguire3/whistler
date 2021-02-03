import WhistlerHeader from './WhistlerHeader';
import WhistleForm from './WhistleForm';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WhistlerHeader />
        <WhistleForm />
      </div>
    );
  }
}

export default App;
