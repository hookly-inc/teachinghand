import React, { Component } from 'react';
import ProgressBar from '../../components/ProgressBar';
import Navbar from '../../components/Navbar';
import ActivityBoard from '../../components/ActivityBoard';

import activityAPI from '../../services/activities.json';
import activityDataAPI from '../../services/activities_data.json';

class Activity extends Component {
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

      const activitySelected = activityData.find(x => x.activity_id == this.state.id);

      this.setState({
        activity: {
          title: activity.title,
          locked: activity.locked,
          steps: activitySelected.steps
        }
      });
    } catch (e) {
      // Do nothing at all
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='activity'>
          <ProgressBar />
          {this.state.activity.steps.map(step => <ActivityBoard key={step.video} video={step.video} word={step.word} />)}
        </div>
      </div>
    )
  }
}

export default Activity;