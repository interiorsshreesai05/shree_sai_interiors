"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: "horizon-house",
    title: "Residence | Horizon House",
    category: "Residential",
    location: "Mumbai",
    image: "/03.png",
    description: "A sanctuary of natural textures, ambient light, and tailored spatial planning.",
  },
  {
    id: "boutique-lounge",
    title: "Boutique Lounge",
    category: "Hospitality",
    location: "Pune",
    image: "/04.png",
    description: "An intimate dining setting blending mood lighting with rich marble finishes.",
  },
  {
    id: "executive-suite",
    title: "Executive Corporate Suite",
    category: "Office",
    location: "Bengaluru",
    image: "/05.png",
    description: "Minimalist executive workspace engineered for focus, acoustic calm, and prestige.",
  },
  {
    id: "retail-gallery",
    title: "Luxury Fine Jewelry Gallery",
    category: "Retail",
    location: "Delhi",
    image: "/03.png",
    description: "A museum-quality retail gallery showcasing bespoke lighting and brass detailing.",
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className={styles.portfolioSection} id="Portfolio">
      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.labelBadge}>
              <span className={styles.badgeDot} />
              <span className={styles.sectionLabel}>Portfolio</span>
            </div>
            <h2 className={styles.heading}>
              Selected spaces that reflect calm luxury and crafted detail.
            </h2>
          </div>

          {/* Carousel Control Buttons */}
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.controlBtn}
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={styles.controlBtn}
              onClick={nextSlide}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Animated Carousel Stage */}
        <div
          className={styles.carouselStage}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].id}
              className={styles.activeCardWrapper}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.projectCard}>
                {/* Image Display */}
                <div className={styles.imageFrame}>
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={styles.image}
                    priority
                  />
                  <div className={styles.imageOverlay} />
                  
                  <div className={styles.viewBadge}>
                    <span>View Project</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Project Details Panel */}
                <div className={styles.projectInfo}>
                  <div className={styles.infoMeta}>
                    <span className={styles.category}>
                      {projects[currentIndex].category}
                    </span>
                    <span className={styles.location}>
                      {projects[currentIndex].location}
                    </span>
                  </div>

                  <h3 className={styles.projectTitle}>
                    {projects[currentIndex].title}
                  </h3>

                  <p className={styles.projectDesc}>
                    {projects[currentIndex].description}
                  </p>

                  <div className={styles.counterRow}>
                    <span className={styles.currentNum}>
                      0{currentIndex + 1}
                    </span>
                    <span className={styles.numDivider}>/</span>
                    <span className={styles.totalNum}>
                      0{projects.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots Indicator */}
        <div className={styles.paginationDots}>
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}