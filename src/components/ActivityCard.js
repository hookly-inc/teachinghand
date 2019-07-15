import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Popover from './Popover';

class ActivityCard extends Component {
  state = {
    locked: this.props.locked,
    popoverOpen: false
  }

  togglePopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
    console.log(this.state.popoverOpen);
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

        <Popover isOpen={this.state.popoverOpen}/>
      </div>
    );
  }
}

export default ActivityCard;