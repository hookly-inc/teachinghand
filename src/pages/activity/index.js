import React, { Component } from 'react';
import ProgressBar from '../../components/ProgressBar';
import api from '../../services/activities.json';
import Navbar from '../../components/Navbar';
import Assistant from '../../components/Assistant';

class Activity extends Component{
  state = {
    id: undefined,
    activity: {
      title: undefined,
      locked: true
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
      const activity = api.activities.find(act => act.id == this.state.id);

      this.setState({
        activity:{
          title: activity.title,
          locked: activity.locked
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
        <div className='dashboard'>
        <ProgressBar />
          
        </div>
        <Assistant />
      </div>
    )
  }
}

export default Activity;