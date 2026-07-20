import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Gallery",
  "Skills",
  "Resume",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy logic to automatically update active line
      const scrollPos = window.innerHeight / 3;
      let currentActive = "Home";

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollPos) {
            currentActive = item;
            break;
          }
        }
      }

      setActive((prev) => (currentActive !== prev ? currentActive : prev));
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial active state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        onClick={() => scrollTo("home")}
      >
        <span className="logo-symbol">&lt;</span>
        Lakshman.dev
        <span className="logo-symbol">&#47;&gt;</span>
      </motion.div>

      {/* Desktop Nav */}
      <ul className="nav-desktop">
        {navItems.map((item) => (
          <li key={item} className="nav-item">
            <button
              onClick={() => scrollTo(item)}
              className={`nav-link ${active === item ? "active" : ""}`}
            >
              {item}
            </button>
            {active === item && (
              <motion.div layoutId="nav-indicator" className="nav-indicator" />
            )}
          </li>
        ))}
      </ul>

      {/* Theme Toggle — desktop */}
      <div className="nav-right">
        <ThemeToggle />
        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`mobile-nav-link ${active === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
          <div className="mobile-toggle-row">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
