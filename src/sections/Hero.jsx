import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { personalInfo, techBadges } from "../data/portfolio";
import hero3d from "../assets/hero-3d-reference.png";
import "./Hero.css";

function TypewriterText({ texts }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = texts[current];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length + 1));
      }, 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrent((c) => (c + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, current, texts]);

  return (
    <span className="typewriter-text">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imgX = useTransform(mouseX, [-1, 1], [-12, 12]);
  const imgY = useTransform(mouseY, [-1, 1], [-8, 8]);
  const rotateX = useTransform(mouseY, [-1, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const socials = [
    { icon: <FiGithub />, href: personalInfo.github, label: "GitHub" },
    { icon: <FiLinkedin />, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  const floatingTech = [
    "React",
    "Git",
    "GitHub",
    "Python",
    "Java",
    "SQL",
    "MySQL",
    "VS Code",
  ];

  return (
    <section id="home" ref={containerRef} className="hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <motion.p
              className="start_text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi! I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.name}
            </motion.h1>
          </div>

          <motion.div
            className="typing_intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypewriterText texts={personalInfo.taglines} />
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            className="badge-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {techBadges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="status-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="availability-pill">
              <div className="status-dot" />
              {personalInfo.availability}
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button
              className="cta-btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>

            <button
              className="cta-btn-outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="social-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
              >
                <div className="social-btn">{icon}</div>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="hero-right">
          <motion.div
            className="hero-visual-wrap"
            style={{ x: imgX, y: imgY, rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <motion.div
              className="hero-visual-bg"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="hero-light-beam beam-one" />
              <span className="hero-light-beam beam-two" />
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit orbit-three" />

              <img
                src={hero3d}
                alt="3D full stack developer workspace"
                className="hero-3d-image"
              />

              {floatingTech.map((tech, index) => (
                <span key={tech} className={`floating-tech tech-${index + 1}`}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
