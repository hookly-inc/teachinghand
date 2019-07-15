import React, { Component } from 'react';
import Modal from 'react-modal';
import Video from './Video';

import activity from '../services/alphabet.json';
class ActivityBoard extends Component {
  state = {
    showVideo: false
  }

  componentWillMount() {
    this.setState({
      steps: activity.steps
    })
  }

  handleVideo() {
    this.setState({
      showVideo: !this.state.showVideo
    })
  }

  render() {
    return (
      <div className='activity-board'>
        <div className='activity-board__photo' onClick={() => this.handleVideo()}></div>
        <div className='activity-board__info'>
          <h1>{this.props.word}</h1>
        </div>

        <Modal isOpen={this.state.showVideo} className='activity-board__video'
        onRequestClose={() => this.handleVideo()}
        closeTimeoutMS={200}>
          <Video video={this.props.video}/>
        </Modal>
      </div>
    )
  }
}

export default ActivityBoard;