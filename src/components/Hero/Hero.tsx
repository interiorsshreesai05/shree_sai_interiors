"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

// Replace with your interior project photo path
const HERO_IMAGE_SRC = "/Homepage.png";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroGrid}>
        {/* Left Column: Copy & Actions */}
        <div className={styles.heroContent}>
          <motion.div
            className={styles.labelBadge}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className={styles.badgeDot} />
            <span className={styles.label}>Luxury Interior Studio</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Crafting warm luxury interiors with a modern, refined soul.
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Bespoke residential, commercial, and hospitality spaces designed for calm, precision, and timeless elegance.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <a href="#contact" className={styles.primaryButton}>
              <span>Book a Consultation</span>
            </a>
            <a href="#portfolio" className={styles.secondaryButton}>
              <span>Explore Portfolio</span>
            </a>
          </motion.div>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <div className={styles.statItem}>
              <span>20+</span>
              <p>Signature Spaces</p>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span>12</span>
              <p>Luxury Collaborations</p>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span>9</span>
              <p>Turnkey Projects</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Sized Interior Image Display */}
        <motion.div
          className={styles.heroMediaContainer}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <div className={styles.imageFrame}>
            <Image
              src={HERO_IMAGE_SRC}
              alt="Shree Sai Interiors Signature Living Space"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlay} />
            <div className={styles.goldCornerTL} />
            <div className={styles.goldCornerBR} />
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.mouseIndicator}>
          <div className={styles.mouseWheel} />
        </div>
        <span>Scroll to discover</span>
      </div>
    </section>
  );
}