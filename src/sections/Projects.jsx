import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import "./Projects.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const colors = [
  "#7B2EFF",
  "#4f1f99",
  "#3d1680",
  "#6020cc",
  "#8b3dff",
  "#5518cc",
];

export default function Projects() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "110px 5%",
        position: "relative",
        zIndex: 1,
        maxWidth: 1300,
        margin: "0 auto",
      }}
    >
      {/* Header */}
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
          What I've built
        </motion.p>
        <motion.h2
          className="project_heading"
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            color: "var(--description-text)",
            fontSize: "1rem",
            marginTop: "1rem",
            maxWidth: 500,
          }}
        >
          A selection of projects I've built — from full-stack applications to
          frontend experiences.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="projects-grid"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            className="project-card"
          >
            {/* Image / Placeholder */}
            {/* Image / Placeholder */}
            <div
              style={{
                height: 180,
                overflow: "hidden",
                background: `linear-gradient(135deg, ${colors[i % colors.length]}22 0%, var(--bg) 100%)`,
                borderBottom: "1px solid var(--border)",
                position: "relative",
              }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <div className="project-img-inner">
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: `${colors[i % colors.length]}40`,
                      letterSpacing: "-1px",
                      userSelect: "none",
                    }}
                  >
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)}
                  </div>
                </div>
              )}

              {project.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    padding: "3px 10px",
                    borderRadius: 99,
                    background: "rgba(123,46,255,0.2)",
                    border: "1px solid rgba(123,46,255,0.4)",
                    color: "#c4b5fd",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  FEATURED
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: "20px 24px 24px" }}>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  marginBottom: 8,
                  color: "var(--text-primary)",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  marginBottom: 14,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: 18,
                }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "8px" }}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-primary"
                >
                  <FiExternalLink size={13} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-outline"
                >
                  <FiGithub size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
