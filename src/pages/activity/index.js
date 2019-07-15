import React, { Component } from 'react';
import ProgressBar from '../../components/ProgressBar';
import Navbar from '../../components/Navbar';
import Assistant from '../../components/Assistant';
import ActivityBoard from '../../components/ActivityBoard';

import activityAPI from '../../services/activities.json';
import activityDataAPI from '../../services/alphabet.json';
class Activity extends Component{
  state = {
    id: undefined,
    activity: {
      title: undefined,
      locked: true,
      steps: []
    }
  }

  componentWillMount() {
    const activityId = this.props.match.params.id;

    this.setState({
      id: activityId
    });
  }

  componentDidMount() {
    try {
      const activity = activityAPI.activities.find(act => act.id == this.state.id);
      const activityData = activityDataAPI;
      // console.log(activityData.steps)

      this.setState({
        activity:{
          title: activity.title,
          locked: activity.locked,
          steps: activityData.steps
        }
      });
    }catch(e) {
      // Do nothing at all
    }
  }

  render() {
    return(
      <div>
        <Navbar />
        {/* <h1>Atividade: {this.state.activity.title}</h1> */}
        <div className='activity'>
          <ProgressBar />
          {this.state.activity.steps.map(step => <ActivityBoard video={step.video} word={step.word}/>)}
        </div>
        <Assistant />
      </div>
    )
  }
}

export default Activity;