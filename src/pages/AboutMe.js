import { useEffect } from "react";
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const inView = entry.target.dataset.skillsClass;
          if (!inView) return;

          if (entry.isIntersecting) {
            entry.target.classList.add(inView);
          } else {
            entry.target.classList.remove(inView);
          }
        });
      },
      {
        threshold: 0.25, // 25% must be visible before triggering
      }
    );

    const elements = document.querySelectorAll('[data-skills-class]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


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
          <SkillCard skill="React" logo={reactLogo} dataClass="fly-in"/>
          <SkillCard skill="NodeJs" logo={nodejs} dataClass="fly-in"/>
          <SkillCard skill="Javascript" logo={javascript} dataClass="fly-in"/>
          <SkillCard skill="C" logo={cprogramming} dataClass="fly-in"/>
          <SkillCard skill="Python" logo={python} dataClass="fly-in"/>
          <SkillCard skill="Docker" logo={docker} dataClass="fly-in"/>
          <SkillCard skill="PHP" logo={php} dataClass="fly-in"/>
          <SkillCard skill="MongoDB" logo={mongodb} dataClass="fly-in"/>
          <SkillCard skill="GitHub" logo={github} dataClass="fly-in"/>
          <SkillCard skill="Linode" logo={linode} dataClass="fly-in"/>
          <SkillCard skill="Wordpress" logo={wordpressLogo} dataClass="fly-in"/>
      </div>
    </section>
  );
};

export default AboutMe;
