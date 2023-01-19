import React from "react";
import AboutMe from "./aboutMe";
import Header from "./header";
import Projects from "./projects";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="dashboard-wrapper">
        <div className="sized-wrapper">
          <div className="header-wrapper">
            <Header />
          </div>
          <div className="children-wrapper">
            <AboutMe />
            <Projects />
          </div>
        </div>
        <div className="banner-wrapper-2">
          <div className="banner-1"></div>
          <div className="banner-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
