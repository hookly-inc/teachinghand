import React from 'react';
import Navbar from '../../components/Navbar';
import ProgressBar from '../../components/ProgressBar';
import ActivitiesPanel from '../../components/ActivitiesPanel';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <ProgressBar />
        <ActivitiesPanel />
      </div>
    </div>
  )
}

export default Dashboard;