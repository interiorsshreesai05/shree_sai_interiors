"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, KeyRound } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Residential Interiors",
    description: "Private homes crafted with rich textures, warm ambient lighting, and bespoke luxury details.",
    icon: Home,
    tag: "Bespoke Homes",
  },
  {
    title: "Commercial Spaces",
    description: "Brand-aligned environments engineered for high-end retail, executive offices, and hospitality.",
    icon: Building2,
    tag: "Corporate & Retail",
  },
  {
    title: "Turnkey Design",
    description: "End-to-end execution from initial concept to final styling with premium materials and precision delivery.",
    icon: KeyRound,
    tag: "Full Execution",
  },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      {/* 1. Continuous Ambient Background Glowing Orbs */}
      <motion.div 
        className={styles.ambientOrbLeft}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className={styles.ambientOrbRight}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className={styles.container}>
        {/* Header Block */}
        <motion.div 
          className={styles.headerRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.labelBadge}>
            <span className={styles.badgeDot} />
            <span className={styles.sectionLabel}>Services</span>
          </div>
          <h2 className={styles.heading}>
            Luxury design services tailored for every scale of interior project.
          </h2>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div 
          className={styles.cardGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className={styles.card}
                variants={cardVariants}
                whileTap={{ scale: 0.97 }}
              >
                {/* 2. Shimmer Light Beam Effect */}
                <motion.div 
                  className={styles.shimmerLine}
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    delay: index * 0.8,
                    ease: "easeInOut"
                  }}
                />

                <div className={styles.cardTop}>
                  <div className={styles.cardIconWrapper}>
                    <Icon size={24} className={styles.cardIcon} />
                  </div>
                  <span className={styles.serviceTag}>{service.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span>Explore Service</span>
                  <div className={styles.arrowCircle}>
                    <ArrowRight size={16} className={styles.arrowIcon} />
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className={styles.hoverGlow} />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}