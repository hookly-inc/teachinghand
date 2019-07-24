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
    });
  }

  render() {
    return (
      <div className='activity-board'>
        <div className='activity-board__container' onClick={() => this.handleVideo()}>
          <img className='activity-board__container__photo' src={this.props.image} alt={this.props.word}/>
        </div>
        <div className='activity-board__info'>
          <div className='activity-board__info__uppercase'>{this.props.word}</div>
          <div className='activity-board__info__lowercase'>{this.props.word}</div>
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