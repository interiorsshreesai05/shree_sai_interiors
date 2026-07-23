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

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerRow}>
          <div className={styles.labelBadge}>
            <span className={styles.badgeDot} />
            <span className={styles.sectionLabel}>Services</span>
          </div>
          <h2 className={styles.heading}>
            Luxury design services tailored for every scale of interior project.
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div className={styles.cardGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className={styles.card}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardIconWrapper}>
                    <Icon size={26} className={styles.cardIcon} />
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

                {/* Subtle Hover Glow Overlay */}
                <div className={styles.hoverGlow} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}