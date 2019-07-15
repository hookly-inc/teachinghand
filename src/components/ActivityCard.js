import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
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
          <Link to={`/activity/${this.state.activityId}`}>Iniciar</Link>
        </Popover>
      </div>
    );
  }
}

export default ActivityCard;