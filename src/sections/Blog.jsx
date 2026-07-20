import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { blogPosts } from "../data/portfolio";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const categoryColors = {
  Backend: "#4f8cff",
  Frontend: "#7B2EFF",
  Career: "#22c55e",
};

export default function Blog() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="blog"
      ref={ref}
      style={{ padding: "120px 5%", position: "relative", zIndex: 1, maxWidth: 1300, margin: "0 auto" }}
    >
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
        .blog-card {
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
          cursor: pointer;
        }
        .blog-card:hover {
          border-color: rgba(123,46,255,0.3);
          box-shadow: 0 20px 50px rgba(123,46,255,0.1);
          transform: translateY(-6px);
        }
        .blog-card:hover .blog-img-inner {
          transform: scale(1.04);
        }
        .blog-img-inner {
          transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7B2EFF;
          font-size: 0.82rem;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .read-more-btn:hover { gap: 10px; }
      `}</style>

      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
        <motion.p variants={fadeUp} style={{ color: "#7B2EFF", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          My thoughts
        </motion.p>
        <motion.h2 variants={fadeUp} style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-1px" }}>
          Latest Articles
        </motion.h2>
        <motion.p variants={fadeUp} style={{ color: "#A0A0A0", fontSize: "1rem", marginTop: "1rem", maxWidth: 500 }}>
          Sharing knowledge, experiences, and insights from my development journey.
        </motion.p>
      </motion.div>

      <motion.div
        className="blog-grid"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {blogPosts.map((post, i) => (
          <motion.div key={post.title} variants={fadeUp} className="blog-card">
            {/* Image placeholder */}
            <div style={{
              height: 160,
              overflow: "hidden",
              background: `linear-gradient(135deg, ${categoryColors[post.category] || "#7B2EFF"}18 0%, #0a0a0a 100%)`,
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>
              <div className="blog-img-inner">
                <span style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: `${categoryColors[post.category] || "#7B2EFF"}30`,
                }}>
                  {i === 0 ? "⚙" : i === 1 ? "⚛" : "✦"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "20px 22px 24px" }}>
              <div style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginBottom: 12,
              }}>
                <span style={{
                  padding: "2px 10px",
                  borderRadius: 99,
                  background: `${categoryColors[post.category] || "#7B2EFF"}15`,
                  border: `1px solid ${categoryColors[post.category] || "#7B2EFF"}35`,
                  color: categoryColors[post.category] || "#7B2EFF",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}>
                  {post.category}
                </span>
                <span style={{ color: "#444", fontSize: "0.75rem" }}>{post.date}</span>
              </div>

              <h3 style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                lineHeight: 1.4,
                marginBottom: 10,
              }}>
                {post.title}
              </h3>

              <p style={{ color: "#666", fontSize: "0.83rem", lineHeight: 1.7, marginBottom: 18 }}>
                {post.excerpt}
              </p>

              <button className="read-more-btn">
                Read More <FiArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
