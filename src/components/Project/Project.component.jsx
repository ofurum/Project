import React,{useState} from 'react';
import Projectavatar from '../../assets/projectavatar.png'
import ProjectOne from '../../components/firstProject/Project.component'
import ProjectTwo from '../../components/SecondProject/secondProject.component'
import ProjectThree from '../../components/ThirdProject/thirdProject.component'
import './Project.styles.scss';

const Project = () => {

return (
  <div className="Project">
    <div className="project-status">
      <h1>Projects</h1>
      <span>
        <img src={Projectavatar} alt="project-icon" className="iconImage" />
      </span>
    </div>
    <div className="project-list">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
    <div className="see-more-button">
      <button className="project-button">See More Projects</button>
    </div>
  </div>
);
}
export default Project;