import React, { Component } from 'react';

class WhistleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userSelected: 'Alice'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const whistle = this.state;
    this.props.addWhistle(whistle);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleUserChange(event) {
    this.setState({
      userSelected: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          className="whistle-form"
          onSubmit={this.handleSubmit}
        >
          <select
            name={this.state.userSelected}
            onChange={this.handleUserChange}
          >
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Charlie">Charlie</option>
          </select>
          <label>
            New Whistle Here
            <textarea
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            className="submit-btn"
            type="submit"
            value="Quietly Share Whislte"
          />
        </form>
      </div>
    );
  }
}

export default WhistleForm;
