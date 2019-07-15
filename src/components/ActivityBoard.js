import React, { Component } from 'react';
import Modal from 'react-modal';
import Video from './Video';

class ActivityBoard extends Component {
  state = {
    showVideo: false
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
        <div className='activity-board__info'></div>

        <Modal isOpen={this.state.showVideo} className='activity-board__video'
        onRequestClose={() => this.handleVideo()}
        closeTimeoutMS={200}>
          <Video code='nuYOPO4MAzM'/>
        </Modal>
      </div>
    )
  }
}

export default ActivityBoard;