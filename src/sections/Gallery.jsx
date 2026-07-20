import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import "./Gallery.css";

// import img1 from "../assets/gallery/img1.jpg";
// import img2 from "../assets/gallery/img2.jpg";
// import img3 from "../assets/gallery/img3.jpg";
// import img4 from "../assets/gallery/img4.jpg";
// import img5 from "../assets/gallery/img5.jpg";
// import img6 from "../assets/gallery/img6.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Gallery() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        padding: "110px 5%",
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
          My moments
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "var(--text-primary)",
          }}
        >
          Gallery
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            marginTop: "1rem",
            maxWidth: 500,
          }}
        >
          Snapshots from projects, events, hackathons, and memorable moments in
          my journey.
        </motion.p>
      </motion.div>

      <motion.div
        className="gallery-grid"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* 01 */}
        <motion.div
          variants={fadeUp}
          className="gallery-item"
          onClick={() =>
            setSelected({
              id: 1,
              image:
                "https://res.cloudinary.com/dqafy8egy/image/upload/v1784437609/ChatGPT_Image_Jul_19_2026_10_33_58_AM_llplgb.png",
              label: "My CodeWork Space",
            })
          }
        >
          <div className="gallery-inner">
            <img
              src={
                "https://res.cloudinary.com/dqafy8egy/image/upload/v1784437609/ChatGPT_Image_Jul_19_2026_10_33_58_AM_llplgb.png"
              }
              alt="My CodeWork Space"
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-number">01</span>
              <div>
                <p className="gallery-category">Gallery</p>
                <h4>My CodeWork Space</h4>
              </div>
              <ZoomIn size={22} color="#fff" />
            </div>
          </div>
        </motion.div>

        {/* 02 */}
        <motion.div
          variants={fadeUp}
          className="gallery-item"
          onClick={() =>
            setSelected({
              id: 2,
              image:
                "https://res.cloudinary.com/dqafy8egy/image/upload/v1784438383/img_code_vu5nbk.png",
              label: "Code in Progress",
            })
          }
        >
          <div className="gallery-inner">
            <img
              src={
                "https://res.cloudinary.com/dqafy8egy/image/upload/v1784438383/img_code_vu5nbk.png"
              }
              alt="Code in Progress"
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-number">02</span>
              <div>
                <p className="gallery-category">Gallery</p>
                <h4>Code in Progress</h4>
              </div>
              <ZoomIn size={22} color="#fff" />
            </div>
          </div>
        </motion.div>

        {/* 03 */}
        <motion.div
          variants={fadeUp}
          className="gallery-item"
          onClick={() =>
            setSelected({
              id: 3,
              image:
                "https://res.cloudinary.com/dqafy8egy/image/upload/v1784438731/Screenshot_2026-07-19_105541_tcw4hj.png",
              label: "CampusHire360",
            })
          }
        >
          <div className="gallery-inner">
            <img
              src={
                "https://res.cloudinary.com/dqafy8egy/image/upload/v1784438731/Screenshot_2026-07-19_105541_tcw4hj.png"
              }
              alt="CampusHire360"
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-number">03</span>
              <div>
                <p className="gallery-category">Gallery</p>
                <h4>CampusHire360</h4>
              </div>
              <ZoomIn size={22} color="#fff" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="gallery-lightbox-card"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-close"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>

              <div className="gallery-preview">
                <img
                  src={selected.image}
                  alt={selected.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="gallery-info">
                <span>Gallery</span>
                <h3>{selected.label}</h3>
                <p>{selected.label} — captured during my journey.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
