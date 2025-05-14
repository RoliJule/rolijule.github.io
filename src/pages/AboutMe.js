import React from "react";
import docker from "../assets/Logos/Docker_Logo_516x516.png"
import javascript from "../assets/Logos/Javascript_Logo_516x516.png"
import mongodb from "../assets/Logos/Mongodb_Logo_516x516.png"
import php from "../assets/Logos/PHP_Logo_516x516.png"
import python from "../assets/Logos/Python_Logo_516x516.png"
import reactLogo from "../assets/Logos/React_Logo_516x516.png"
import SkillCard from "../components/SkillCard";


const AboutMe = () => {
  return (
    <section id="about-section">
      {/* Visual/Avatar Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/images/avatar-placeholder.png" // Replace with your image path
          alt="Rolando Jule-Blanco"
          className="w-64 h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="">
        <h2 className="">About Me</h2>
        <p className="">
          I’m a Full Stack Developer with a strong balance between front-end and
          back-end work, and a deep interest in creating intuitive, responsive,
          and reliable web experiences. My journey into tech started with a
          curiosity for how things work — from building Arduino projects to
          designing web tools that streamline real-world workflows.
        </p>
        <p className="">
          I’ve developed everything from internal tools to public-facing
          websites using JavaScript, React, Python, PHP, and MongoDB. I’ve also
          managed servers, Docker containers, and deployment pipelines — giving
          me a full-stack perspective to build reliable, scalable solutions.
        </p>
        <p className="">
          I’m driven by impact, clean design, and collaborative problem-solving.
          Whether building from scratch or improving systems, I bring curiosity,
          care, and technical depth to every project.
        </p>

        {/* Tech Icons */}
        <div className="">
          <SkillCard skill="React" logo={reactLogo} />
          <SkillCard skill="Javascript" logo={javascript} />
          <SkillCard skill="Python" logo={python} />
          <SkillCard skill="Docker" logo={docker} />
          <SkillCard skill="PHP" logo={php} />
          <SkillCard skill="MongoDB" logo={mongodb} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
