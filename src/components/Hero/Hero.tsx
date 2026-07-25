"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Compass, ShieldCheck } from "lucide-react";
import styles from "./Hero.module.css";

export default function HeroCinematic() {
  return (
    <section className={styles.heroWrapper} id="home">
      {/* Background Lighting Vignette */}
      <div className={styles.ambientGlow} />

      {/* Main Grid */}
      <div className={styles.gridContainer}>
        {/* Left Column - Content */}
        <div className={styles.leftCol}>
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.topBadge}
          >
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>
              SHREE SAI INTERIORS • BESPOKE STUDIO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={styles.title}
          >
            Creating spaces where architecture meets{" "}
            <span className={styles.goldText}>silent luxury.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={styles.description}
          >
            Bespoke residential & commercial interior architecture engineered with
            raw materials, kinetic spatial harmony, and uncompromising precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className={styles.btnGroup}
          >
            <a href="#contact" className={styles.primaryGoldBtn}>
              <span>Schedule Consultation</span>
              <ArrowUpRight className={styles.btnIcon} />
            </a>

            <a href="#portfolio" className={styles.ghostOutlineBtn}>
              <span>Explore Portfolio</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className={styles.rightCol}
        >
          <div className={styles.imageCardContainer}>
            <Image
              src="/Homepage.png"
              alt="Shree Sai Interiors Luxury Architecture"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={styles.heroImg}
            />
            <div className={styles.imageOverlay} />

            {/* High-Contrast Floating Stat Card */}
            <div className={styles.floatingGlassBadge}>
              <Award className={styles.cardIcon} />
              <div>
                <strong className={styles.cardTitle}>25+ Signature Spaces</strong>
                <span className={styles.cardSub}>Completed Across India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Metrics Bar */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={styles.bottomBar}
      >
        <div className={styles.metricItem}>
          <ShieldCheck className={styles.metricIcon} />
          <div>
            <strong>100% Turnkey</strong>
            <span>Design to Execution</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.metricItem}>
          <Award className={styles.metricIcon} />
          <div>
            <strong>12 Excellence Awards</strong>
            <span>Architectural Guild</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.metricItem}>
          <Compass className={styles.metricIcon} />
          <div>
            <strong>Key Locations</strong>
            <span>Mumbai • Goa • Dubai</span>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}