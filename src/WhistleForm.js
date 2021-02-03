import React, { Component } from 'react';

class WhistleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // this.setState({
    //   [name]: value
    // })
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="whistle-form">
          <label>
            New Whistle Here
            <textarea
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default WhistleForm;
