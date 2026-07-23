import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiDownload,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
        style={{ textAlign: "center" }}
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
          Let's talk
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            color: "#A0A0A0",
            fontSize: "1rem",
            marginTop: "1rem",
            maxWidth: 500,
            margin: "1rem auto 0",
          }}
        >
          Have a project in mind or just want to say hi? Drop me a message and
          I'll get back to you.
        </motion.p>
      </motion.div>

      <motion.div
        className="contact-form"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          <div className="form-row">
            <div>
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              type="text"
              placeholder="Project Collabration"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>

          <div>
            <label className="form-label">Message</label>
            <textarea
              className="form-input"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              style={{ resize: "vertical" }}
            />
          </div>

          {error && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                color: "#fca5a5",
                fontSize: "0.85rem",
              }}
            >
              ❌ {error}
            </div>
          )}

          <div className="button-row">
            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : sent ? (
                "✓ Sent!"
              ) : (
                <>
                  <FiSend size={18} /> Send Message
                </>
              )}
            </button>

            <a href="/Lakshman_ATS_Final_Resume.pdf" className="dl-btn">
              View Resume
            </a>
          </div>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            { icon: <FiGithub />, href: personalInfo.github },
            { icon: <FiLinkedin />, href: personalInfo.linkedin },
            { icon: <FiMail />, href: `mailto:${personalInfo.email}` },
            {
              icon: <FaWhatsapp />,
              href: `https://wa.me/${personalInfo.whatsapp ? personalInfo.whatsapp.replace(/\D/g, "") : ""}`,
            },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer">
              <div className="contact-social">{icon}</div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
