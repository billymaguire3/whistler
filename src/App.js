import WhistlerHeader from './WhistlerHeader';
import WhistleForm from './WhistleForm';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
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
