import React from 'react';
import Navbar from '../../components/Navbar';
import ProgressBar from '../../components/ProgressBar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <ProgressBar />
      </div>
    </div>
  )
}

export default Dashboard;