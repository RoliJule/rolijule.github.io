import React from "react";

const SkillCard = ({skill, logo}) => {
    return (
        <div className="skill-card"> 
            <p>{skill}</p>
            <hr></hr>
            <img src={logo} alt={skill}></img>
        </div>
    );
};

export default SkillCard;