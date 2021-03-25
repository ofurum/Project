import React from 'react';
import Introductory  from '../../components/introductory/introductory.component';
import Project from '../../components/Project/Project.component';
import Experience from '../../components/Experince/Experience.component'

const HomePage = () => (
    <div className="home-page">
        <Introductory />
        <Project />
        <Experience />
    </div>
)

export default HomePage