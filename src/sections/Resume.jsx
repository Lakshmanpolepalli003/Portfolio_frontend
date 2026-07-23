import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "./Resume.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Resume() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="resume"
      ref={ref}
      style={{
        padding: "120px 5%",
        position: "relative",
        zIndex: 1,
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
          My journey
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: "1rem",
            color: "var(--text-primary)",
          }}
        >
          Resume
        </motion.h2>

        {/* ── Content Box ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="resume-content-box">
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: "1.8",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Looking for a dedicated{" "}
            <span style={{ color: "#7B2EFF", fontWeight: 600 }}>
              Full Stack Developer
            </span>
            ? Download my resume to explore my technical skills, hands-on
            projects, internship experience, education, and certifications.
          </p>

          <div className="resume-btn-container" style={{ marginTop: 0 }}>
            <a
              href="/Lakshman_ATS_Final_Resume (3).pdf"
              download
              className="download-btn"
            >
              <FiDownload size={18} /> Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
