import WhistlerHeader from './WhistlerHeader';
import WhistleForm from './WhistleForm';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whistles: []
    }
    this.addWhistle = this.addWhistle.bind(this);
  }

  addWhistle(newWhistle) {
    this.setState({
      whistles: [...this.state.whistles, newWhistle]
    })
    return;
  }

  render() {
    return (
      <div className="App">
        <WhistlerHeader />
        <WhistleForm
          addWhistle={this.addWhistle}
        />
      </div>
    );
  }
}

export default App;
