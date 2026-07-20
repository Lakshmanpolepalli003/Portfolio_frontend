import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import "./Footer.css";
export default function Footer() {
  const footerLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Gallery", id: "gallery" },
    { name: "Resume", id: "Resume" },
    { name: "Contact", id: "contact" },
  ];
  return (
    <footer
      className="footer"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "40px 5%",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      {/* Purple top line accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(to right, transparent, #7B2EFF, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Left - Logo + copyright */}
        <div>
          <div
            className="footer_logo"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              color: "var(--text)",
              fontSize: "1.2rem",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#7B2EFF" }}>&lt;</span>
            Lakshman.dev
            <span style={{ color: "#7B2EFF" }}>&#47;&gt;</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Navigation Links */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {footerLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontFamily: "Inter, sans-serif",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#7B2EFF")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <FiGithub />, href: personalInfo.github },
                { icon: <FiLinkedin />, href: personalInfo.linkedin },
                { icon: <FiMail />, href: `mailto:${personalInfo.email}` },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 36,
                    height: 36,

                    marginBottom: "2px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: "0.95rem",
                    transition: "all 0.3s",
                    border: "1px solid var(--border)",
                    color: "var(--footer-icon)",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <p
            style={{
              color: "#8f8d8dff",
              fontSize: "0.8rem",
              marginTop: "10px",
            }}
          >
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>

        {/* Right - Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(123,46,255,0.1)",
            border: "1px solid rgba(123,46,255,0.25)",
            color: "#c4b5fd",
            padding: "8px 16px",
            borderRadius: 8,
            fontSize: "0.8rem",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(123,46,255,0.2)";
            e.currentTarget.style.borderColor = "rgba(123,46,255,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(123,46,255,0.1)";
            e.currentTarget.style.borderColor = "rgba(123,46,255,0.25)";
          }}
        >
          <FiArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}
