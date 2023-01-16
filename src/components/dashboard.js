import React from 'react';
import AboutMe from './aboutMe';
import Header from './header';
import Projects from './projects';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="children-wrapper">
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default Dashboard;
