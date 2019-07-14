import React, { Component } from 'react';
import ActivityCard from './ActivityCard';

class ActivitiesPanel extends Component {
  render() {
    return (
      <section className='activities-panel'>
        <ActivityCard title='Alfabeto'/>
        <ActivityCard title='Números'/>
        <ActivityCard locked/>
        <ActivityCard locked  />
        <ActivityCard locked  />
      </section>
    );
  }
}

export default ActivitiesPanel;
