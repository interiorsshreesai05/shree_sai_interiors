"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryImages = [
  {
    id: 1,
    src: "/Homepage.png",
    title: "Sculptural Marble Detail",
    category: "Living Lounge",
  },
  {
    id: 2,
    src: "/AmbientLight.jpeg",
    title: "Ambient Brass Lighting",
    category: "Dining Suite",
  },
  {
    id: 3,
    src: "/customwood.jpeg",
    title: "Custom Wood Joinery",
    category: "Master Suite",
  },
  {
    id: 4,
    src: "/wall.jpeg",
    title: "Textured Fluted Wall",
    category: "Executive Study",
  },
  // --- ADD YOUR 5TH IMAGE HERE ---
  {
    id: 5,
    src: "/galley5.jpeg", // Replace with your image file name
    title: "Bespoke Accent Detail", // Replace with your title
    category: "Outdoor Terrace", // Replace with your category
  },
{
    id: 6,
    src: "/outdoorl.png",
    title: "Architectural Bronze Entry",
    category: "Foyer Gallery",
  },
];

// Duplicate items to ensure seamless infinite looping on mobile marquee
const marqueeItems = [...galleryImages, ...galleryImages];

export default function Gallery() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.badgeRow}>
            <span className={styles.goldDot} />
            <Sparkles size={11} className={styles.badgeIcon} />
            <span className={styles.sectionLabel}>Portfolio Spotlight</span>
          </div>
          <div className={styles.titleRow}>
            <h2 className={styles.heading}>
              Architectural Detail <span className={styles.goldText}>&amp; Refinement</span>
            </h2>
            <p className={styles.subheading}>
              Explore bespoke craftsmanship, ambient lighting highlights, and hand-selected surfaces.
            </p>
          </div>
        </div>

        {/* 1. Desktop Accordion Stage */}
        <div className={styles.expandableGrid}>
          {galleryImages.map((item) => {
            const isActive = item.id === activeId;
            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                layout
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    priority={item.id === 1}
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardGradient} />

                {!isActive && (
                  <div className={styles.collapsedLabel}>
                    <span className={styles.collapsedCategory}>{item.category}</span>
                    <span className={styles.collapsedTitle}>{item.title}</span>
                  </div>
                )}

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.expandedContent}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.glassBox}>
                        <div className={styles.metaRow}>
                          <span className={styles.categoryPill}>{item.category}</span>
                          <div className={styles.arrowIcon}>
                            
                          </div>
                        </div>
                        <h3 className={styles.expandedTitle}>{item.title}</h3>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Mobile Continuous Slider (Right to Left Marquee) */}
        <div className={styles.mobileMarqueeContainer}>
          <motion.div
            className={styles.mobileMarqueeTrack}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18, // Adjust speed (higher number = slower slide)
              ease: "linear",
            }}
          >
            {marqueeItems.map((item, index) => (
              <div key={`mobile-${item.id}-${index}`} className={styles.mobileCard}>
                <div className={styles.mobileImageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="280px"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardGradient} />
                </div>
                <div className={styles.mobileCardContent}>
                  <span className={styles.categoryPill}>{item.category}</span>
                  <h3 className={styles.mobileTitle}>{item.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}