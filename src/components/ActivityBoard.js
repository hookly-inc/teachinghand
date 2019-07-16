import React, { Component } from 'react';
import Modal from 'react-modal';
import Video from './Video';

class ActivityBoard extends Component {
  state = {
    showVideo: false
  }

  componentWillMount() {
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
          <img className='activity-board__container__photo' src="https://images.wallpaperscraft.com/image/bird_silhouette_vector_134154_1920x1080.jpg" alt='a'/>
        </div>
        <div className='activity-board__info'>
          <span className='activity-board__info__uppercase'>{this.props.word}</span>
          <span className='activity-board__info__lowercase'>{this.props.word}</span>
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