import React, { Component } from 'react';

class WhistleForm extends Component {
  render() {
    return (
      <div>
        <form className="whistle-form">
          <label>
            New Whistle Here
            <textarea />
          </label>
        </form>
      </div>
    );
  }
}

export default WhistleForm;
