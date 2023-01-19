import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <div className="projects">Movie List</div>
        <div className="projects">Golf Tracker</div>
        <div className="projects">Calculator</div>
        <div className="projects">Login Page</div>
      </div>
    </div>
  );
};

export default Projects;
