import React from "react";
import "../styles/skillCardStyles.css";

const SkillCard = ({skill, logo}) => {
    return (
        <div className="skill-card"> 
            <p>{skill}</p>
            <div className="seperator"></div>
            <img src={logo} alt={skill}></img>
        </div>
    );
};

export default SkillCard;