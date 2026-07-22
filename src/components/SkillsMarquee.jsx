import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

import "./SkillsMarquee.css";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="var(--text-primary)" /> },
  { name: "REST APIs", icon: <TbApi color="#0096D6" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },

  {
    name: "Responsive Design",
    icon: <MdDevices color="white" />,
  },
  {
    name: "JWT",
    icon: (
      <SiJsonwebtokens
        color="white"
        style={{ filter: "invert(var(--invert-icon, 0))" }}
      />
    ),
  },
];

export default function SkillsMarquee({ theme }) {
  // Split the skills into 3 arrays for the 3 rows
  const row1 = skillsData.slice(0, 7);
  const row2 = skillsData.slice(7, 14);
  const row3 = skillsData.slice(14, 19);

  return (
    <section className="skills-marquee-section" id="tech-stack">
      <div className="skills-header">
        <h2 className="skills-title">Tech Stack</h2>
        <p className="skills-subtitle">
          Technologies I use to build modern, scalable, and responsive
          applications.
        </p>
      </div>

      <div className={`marquee-container ${theme}`}>
        <div className="marquee-row marquee-left">
          <div className="marquee-content">
            {/* Duplicate for infinite effect */}
            {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <div className="skill-badge" key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-right">
          <div className="marquee-content">
            {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <div className="skill-badge" key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-left row3">
          <div className="marquee-content">
            {[...row3, ...row3, ...row3, ...row3, ...row3].map(
              (skill, index) => (
                <div className="skill-badge" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
