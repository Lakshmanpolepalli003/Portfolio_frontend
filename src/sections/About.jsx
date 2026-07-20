import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education } from "../data/portfolio";
import "./About.css";
import profileImg from "../assets/profile.png";

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ color: "#7B2EFF" }}>
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 5%",
        position: "relative",
        zIndex: 1,
        maxWidth: 1300,
        margin: "0 auto",
      }}
    >
      {/* About Hero */}
      <motion.div
        className="about-hero"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Left */}
        <motion.div variants={fadeUp} className="about-content">
          <p className="section-label">ABOUT ME</p>

          {/* <h2 className="section-title">
            Full Stack
            <span style={{ color: "#7B2EFF" }}> Developer</span>
          </h2> */}

          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              marginTop: "25px",
              fontSize: "1rem",
            }}
          >
            I'm a passionate Full Stack Developer with a strong foundation in
            building modern, scalable web applications. I enjoy transforming
            ideas into responsive, high-performance digital experiences using
            React, Python, and MySQL.
          </p>
        </motion.div>

        {/* Right */}
        {/*  <motion.div
          variants={fadeUp} 
          className="about-image-wrapper"
          whileHover={{ scale: 1.03 }}
        >
          <div className="about-image-bg"></div>

          <img src={profileImg} alt="Profile" className="about-image" />

          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
        </motion.div> */}

        <motion.div
          className="about-image-wrapper"
          variants={fadeUp}
          whileHover={{ scale: 1.03, rotateY: 8 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Glow */}
          <div className="glow glow1"></div>
          <div className="glow glow2"></div>

          {/* Rotating Rings */}
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>

          {/* Floating Orbs */}
          <span className="orb orb1"></span>
          <span className="orb orb2"></span>
          <span className="orb orb3"></span>
          <span className="orb orb4"></span>

          {/* Animated Grid */}
          <div className="grid-bg"></div>

          {/* Profile Image */}
          <img src={profileImg} alt="Profile" className="about-image" />
        </motion.div>
      </motion.div>

      {/* Experience + Education */}
      <div className="about-grid" style={{ marginTop: "4rem" }}>
        {/* Experience */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h3
            className="about_Experience"
            variants={fadeUp}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#7B2EFF",
                boxShadow: "0 0 10px #7B2EFF",
                display: "inline-block",
              }}
            />
            Experience
          </motion.h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {experience.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} className="timeline-card">
                <div
                  style={{
                    color: "#7B2EFF",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    marginBottom: 6,
                  }}
                >
                  {exp.year}
                </div>
                <div
                  className="about_exp_title"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 4,
                  }}
                >
                  {exp.title}
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.82rem",
                    marginBottom: 8,
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    color: "var(--description-text)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {exp.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h3
            className="about_Experience"
            variants={fadeUp}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#7B2EFF",
                boxShadow: "0 0 10px #7B2EFF",
                display: "inline-block",
              }}
            />
            Education
          </motion.h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {education.map((edu, i) => (
              <motion.div key={i} variants={fadeUp} className="timeline-card">
                <div
                  style={{
                    color: "#7B2EFF",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    marginBottom: 6,
                  }}
                >
                  {edu.year}
                </div>
                <div
                  className="about_exp_title"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 4,
                  }}
                >
                  {edu.degree}
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.82rem",
                    marginBottom: 8,
                  }}
                >
                  {edu.institution}
                </div>
                <div
                  style={{
                    color: "var(--description-text)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {edu.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
