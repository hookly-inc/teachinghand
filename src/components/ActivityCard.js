import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import Popover from './Popover';
import { Link } from 'react-router-dom';

class ActivityCard extends Component {
  state = {
    activityId: this.props.activityId,
    locked: this.props.locked,
    popoverOpen: false
  }

  togglePopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div className='activity-card' onClick ={() => this.togglePopover()}>
        {!this.props.locked &&
          <h2 className='activity-card__title'>{this.props.title}</h2>
        }

        {this.state.locked && 
        <span> 
          <FontAwesomeIcon icon={faLock} size='3x'/>
        </span>}

        <Popover isOpen={!this.state.locked && this.state.popoverOpen}>
          <Link to='/' className='popover_icon'>
            <FontAwesomeIcon icon={faPlus} size='2x'/>
          </Link>
          
          <Link to={`/activity/${this.state.activityId}`} className='popover_icon'>
            <FontAwesomeIcon icon={faPlay} size='2x'/>
          </Link>
        </Popover>
      </div>
    );
  }
}

export default ActivityCard;