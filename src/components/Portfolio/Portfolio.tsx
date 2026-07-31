"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: "horizon-house",
    title: "Horizon House Residence",
    category: "Residential",
    location: "Mumbai",
    image: "/03.png",
    description: "A sanctuary of natural textures, ambient light, and tailored spatial planning designed for modern architectural calm.",
  },
  {
    id: "boutique-lounge",
    title: "Boutique Lounge",
    category: "Hospitality",
    location: "Pune",
    image: "/04.png",
    description: "An intimate dining setting blending mood lighting with rich marble finishes and acoustic warmth.",
  },
  {
    id: "executive-suite",
    title: "Executive Corporate Suite",
    category: "Office",
    location: "Bengaluru",
    image: "/05.png",
    description: "Minimalist executive workspace engineered for focus, acoustic calm, and quiet luxury prestige.",
  },
  {
    id: "retail-gallery",
    title: "Luxury Fine Jewelry Gallery",
    category: "Retail",
    location: "Delhi",
    image: "/03.png",
    description: "A museum-quality retail gallery showcasing bespoke linear lighting and handcrafted brass detailing.",
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerRow}>
<div className={styles.portfolioBadge}>
    <span className={styles.badgeDot} />
    <span className={styles.badgeText}>PORTFOLIO</span>
  </div>
          <h2 className={styles.heading}>
            Architecture & interiors designed with quiet luxury.
          </h2>
        </div>

        {/* Portfolio Content Stage */}
        <div className={styles.carouselStage}>
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].id}
              className={styles.activeCardWrapper}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.projectCard}>
                {/* Visual Image Showcase */}
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
                  
              
                </div>

                {/* Project Information */}
                <div className={styles.projectInfo}>
                  <div className={styles.infoMeta}>
                    <span className={styles.category}>
                      {projects[currentIndex].category}
                    </span>
                    <span className={styles.metaDivider}>•</span>
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
                    <div className={styles.numericCounter}>
                      <span className={styles.currentNum}>
                        0{currentIndex + 1}
                      </span>
                      <span className={styles.numDivider}>/</span>
                      <span className={styles.totalNum}>
                        0{projects.length}
                      </span>
                    </div>

                    {/* Nav Controls */}
                    <div className={styles.controls}>
                      <button
                        type="button"
                        className={styles.controlBtn}
                        onClick={prevSlide}
                        aria-label="Previous project"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        className={styles.controlBtn}
                        onClick={nextSlide}
                        aria-label="Next project"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
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