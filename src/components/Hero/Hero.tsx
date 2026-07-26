"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import styles from "./Hero.module.css";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background Particles Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette matching the screenshot (crimson / deep red floating orbs)
const colors = [
  "rgba(280, 40, 40, ",
  "rgba(210, 45, 45, ",
  "rgba(235, 50, 50, ",
  "rgba(255, 70, 70, ",
  "rgba(255, 100, 100, ",
];
    const particleCount = Math.floor((width * height) / 11000);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = p.radius * 2;
        ctx.shadowColor = p.color + "0.8)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={styles.heroWrapper} id="home">
      {/* Moving Red Particles Canvas */}
      <canvas ref={canvasRef} className={styles.particleCanvas} />

      {/* Radial Vignette Mask to blend center text smoothly */}
      <div className={styles.radialMask} />

      {/* Centered Content Container */}
      <div className={styles.centerContainer}>
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.topBadge}
        >
          <span>Bespoke Interior & Architectural Studio</span>
        </motion.div>

        {/* Main Headline */}
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

        {/* CTA Buttons */}
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

          <a href="#portfolio" className={styles.secondaryGlassBtn}>
            <Play className={styles.playIcon} />
            <span>Watch Spatial Showcase</span>
          </a>
        </motion.div>

        {/* Bottom Small Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.bottomPillRow}
        >
          <span>Designed for</span>
          <span className={styles.tagPill}>Luxury Villas</span>
          <span>and</span>
          <span className={styles.tagPill}>Bespoke Penthouses</span>
        </motion.div>
      </div>
    </section>
  );
}