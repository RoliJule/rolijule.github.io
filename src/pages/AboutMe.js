import React from "react";
import "../styles/aboutMe.css";
import reactLogo from "../assets/Logos/React_Logo_516x516.png"
import nodejs from "../assets/Logos/node_js_Logo_516.png"
import docker from "../assets/Logos/Docker_Logo_516x516.png"
import javascript from "../assets/Logos/Javascript_Logo_516x516.png"
import cprogramming from "../assets/Logos/c_programming_Logo_516.png"
import mongodb from "../assets/Logos/Mongodb_Logo_516x516.png"
import php from "../assets/Logos/PHP_Logo_516x516.png"
import python from "../assets/Logos/Python_Logo_516x516.png"
import wordpressLogo from "../assets/Logos/wordpress_Logo_516.png"
import linode from "../assets/Logos/linode_Logo_516.png"
import github from "../assets/Logos/github_Logo_516.png"
import SkillCard from "../components/SkillCard";
import RJLogo from "../components/icons/RJLogo";


const AboutMe = () => {
  return (
    <section id="about-section">
      {/* Visual/Avatar Section */}
      <div className="bio-wrapper">
        <div id="about-icon-card">
          <RJLogo className={'about-icon'}/>
        </div>

        {/* Text Section */}
        <div id="about-text-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I’m a Full Stack Developer with a strong balance between front-end and
            back-end work, and a deep interest in creating intuitive, responsive,
            and reliable web experiences. My journey into tech started with a
            curiosity for how things work, from building Arduino projects to
            designing web tools that streamline real-world workflows.
            <br></br>
            <br></br>
            I’ve developed everything from internal tools to public-facing
            websites using JavaScript, React, Python, PHP, and MongoDB. I’ve also
            managed servers, Docker containers, and deployment pipelines giving
            me a full-stack perspective to build reliable, scalable solutions.
            <br></br>
            <br></br>
            I’m driven by impact, clean design, and collaborative problem-solving.
            Whether building from scratch or improving systems, I bring curiosity,
            care, and technical depth to every project.
          </p>
        </div>
      </div>
      <h2 className="section-title">Skills</h2>
      <div className="skill-wrapper">
          <SkillCard skill="React" logo={reactLogo}/>
          <SkillCard skill="NodeJs" logo={nodejs}/>
          <SkillCard skill="Javascript" logo={javascript}/>
          <SkillCard skill="C" logo={cprogramming} />
          <SkillCard skill="Python" logo={python} />
          <SkillCard skill="Docker" logo={docker} />
          <SkillCard skill="PHP" logo={php} />
          <SkillCard skill="MongoDB" logo={mongodb} />
          <SkillCard skill="GitHub" logo={github} />
          <SkillCard skill="Linode" logo={linode} />
          <SkillCard skill="Wordpress" logo={wordpressLogo} />
      </div>
    </section>
  );
};

export default AboutMe;
