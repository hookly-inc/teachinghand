import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    return (
      <div>
        <span>Progresso: </span>
        <div className="progress-bar"></div>
      </div>
    );
  }
}

export default ProgressBar;