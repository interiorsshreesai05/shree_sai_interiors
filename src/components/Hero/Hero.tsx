"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroWrapper} id="home">
      {/* High-Res Luxury Interior Image */}
      <div className={styles.heroBgImage} />

      {/* Dark Gradient Overlay for Text Readability */}
      <div className={styles.radialMask} />

      {/* Hero Content Container */}
      <div className={styles.centerContainer}>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={styles.title}
        >
          Design spaces faster and <br />
          focus on luxury living.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.description}
        >
          We help homeowners and developers turn architectural blueprints into
          jaw-dropping, fully customized physical sanctuaries.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className={styles.btnGroup}
        >
          <a href="#contact" className={styles.primaryRedBtn}>
            <span>Book Design Consultation</span>
            <ArrowUpRight className={styles.btnIcon} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}