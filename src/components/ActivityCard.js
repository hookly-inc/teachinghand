import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

class ActivityCard extends Component {
  state = {
    locked: this.props.locked
  }

  render() {
    return (
      <div className='activity-card'>
        {!this.props.locked &&
          <h2 className='activity-card__title'>{this.props.title}</h2>
        }

        {this.state.locked && 
        <span onClick={_ => this.handleUnlock()}> 
          <FontAwesomeIcon icon={faLock} size='3x'/>
        </span>}
      </div>
    );
  }
}

export default ActivityCard;

// $ yarn add @fortawesome/fontawesome-svg-core
// $ yarn add @fortawesome/free-solid-svg-icons
// $ yarn add @fortawesome/react-fontawesome