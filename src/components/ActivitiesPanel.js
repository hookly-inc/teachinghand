import React, { Component } from 'react';
import ActivityCard from './ActivityCard';

// Development mode only
import api from '../services/activities.json';

class ActivitiesPanel extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    try{
      if(api) {
        this.setState({
          activities: api.activities
        });
      }
    }catch(e) {
      // Do nothing at all
    }
  }

  render() {
    return (
      <section className='activities-panel'>
        {this.state.activities.map((activity, index) => 
          <ActivityCard key={index} title={activity.title} locked={activity.locked} activityId={activity.id}/>
        )}
      </section>
    );
  }
}

export default ActivitiesPanel;
