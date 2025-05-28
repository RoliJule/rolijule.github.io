import React from "react";
import "../styles/skillCardStyles.css";

const SkillCard = ({skill, logo, dataClass}) => {
    return (
        <div className="skill-card" data-skills-class={dataClass}> 
            <p>{skill}</p>
            <div className="seperator"></div>
            <img src={logo} alt={`${skill} Logo`}></img>
        </div>
    );
};

export default SkillCard;