import React, { Component } from 'react';

class Popover extends Component {
  state = {
    active: false
  }

  componentDidUpdate() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        {this.state.active &&
        <div className='popover'>
          <p>This is a popover!</p>
        </div>}
      </div>
    );
  }
}

export default Popover;