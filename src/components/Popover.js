import React, { Component } from 'react';

class Popover extends Component {
  state = {
    active: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) this.setState({ active: nextProps.isOpen });
  }

  render() {
    return (
      <div className='popover_container'>
        {this.state.active &&
        <div className='popover'>
          {this.props.children}
        </div>}
      </div>
    );
  }
}

export default Popover;