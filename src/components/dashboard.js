import React from "react";
import AboutMe from "./aboutMe";
import "./dashboard.css";
import Header from "./header";
import ContactMe from "./contactMe";
import Links from "./links";

const Dashboard = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="children-wrapper">
        <AboutMe />
        <ContactMe />
        <Links />
      </div>
    </div>
  );
};

export default Dashboard;
