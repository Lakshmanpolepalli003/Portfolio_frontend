import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import "./Skills.css";
import { SiDjango, SiFirebase } from "react-icons/si";
import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiRender,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { MdApi } from "react-icons/md";

const iconMap = {
  HTML5: <FaHtml5 color="#E34F26" />,
  CSS3: <FaCss3Alt color="#264de4" />,
  JavaScript: <SiJavascript color="#f7df1e" />,
  React: <FaReact color="#61DAFB" />,
  "Tailwind CSS": <SiTailwindcss color="#38bdf8" />,
  Python: <FaPython color="#ed8b00" />,
  Django: <SiDjango color="#6DB33F" />,
  "REST API": <MdApi color="#7B2EFF" />,
  MySQL: <SiMysql color="#4479A1" />,
  Git: <FaGitAlt color="#F05032" />,
  GitHub: <FaGithub color="#fff" />,
  Postman: <SiPostman color="#FF6C37" />,
  Firebase: <SiFirebase color="#FFCA28" />,
  Render: <SiRender color="#46E3B7" />,
  Netlify: <SiNetlify color="#00C7B7" />,
  Vercel: <SiVercel color="#fff" />,
};

const skills = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Firebase", category: "Cloud" },
  { name: "Render", category: "Cloud" },
  { name: "Netlify", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
];

const categoryColors = {
  Frontend: "#7B2EFF",
  Backend: "#4f8cff",
  Database: "#22c55e",
  Tools: "#f59e0b",
  Cloud: "#06b6d4",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export default function Skills() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 5%",
        position: "relative",
        // zIndex: 1,
        maxWidth: 1300,
        margin: "0 auto",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.p
          variants={fadeUp}
          style={{
            color: "#7B2EFF",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          My toolkit
        </motion.p>
        <motion.h2
          className="skills_heading"
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          className="skills_matter"
          variants={fadeUp}
          style={{
            color: "--description-text: #555555",
            fontSize: "1rem",
            marginTop: "1rem",
            maxWidth: 500,
          }}
        >
          Technologies I work with to build modern, scalable, and beautiful
          applications.
        </motion.p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={fadeUp} className="skill-card">
            <div className="skill-icon">
              {iconMap[skill.name] || (
                <span style={{ color: "#7B2EFF", fontSize: "1.2rem" }}>⬡</span>
              )}
            </div>
            <div className="skill-name">{skill.name}</div>
            <div
              className="skill-category"
              style={{ color: categoryColors[skill.category] || "#7B2EFF" }}
            >
              <span
                className="skill-category-dot"
                style={{
                  background: categoryColors[skill.category] || "#7B2EFF",
                }}
              />
              {skill.category}
            </div>
          </motion.div>
        ))}
        {/* {skills.map((skill) => (
          <motion.div key={skill.name} variants={fadeUp} className="skill-card">
            <div className="skill-icon">
              {iconMap[skill.name] || (
                <span style={{ color: "#7B2EFF", fontSize: "1.2rem" }}>⬡</span>
              )}
            </div>
            <div
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: "0.88rem",
                textAlign: "center",
                color: "var(--text-primary)",
              }}
            >
              {skill.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.7rem",
                color: categoryColors[skill.category] || "#7B2EFF",
                fontWeight: 500,
              }}
            >
              <span
                className="skill-category-dot"
                style={{
                  background: categoryColors[skill.category] || "#7B2EFF",
                }}
              />
              {skill.category}
            </div>
          </motion.div>
        ))} */}
      </motion.div>
    </section>
  );
}
