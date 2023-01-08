import React from 'react';
import Experience from './Experience.js';
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
    return (
        <div className='experienceContainer' id='exp'>
            <h1 className='head'>Experience</h1>
            <div className='experienceContainer__info'>
                <Experience number="+6" tittle="Begineer level projects" />
                <Experience number="300+" tittle="Problems solved in Guvi" style={{ backgroundColor: "blue" }} />
                {/* <Experience number="6+" tittle="Years Teaching" /> */}
                <Experience number="3month" tittle="MERN stack developer course" />
            </div>
        </div>
    )
}

export default ExperienceContainer
