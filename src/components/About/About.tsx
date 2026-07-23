"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

const facts = [
  { value: "18+", label: "Signature Residences" },
  { value: "14", label: "Commercial Experiences" },
  { value: "92%", label: "Repeat & Referral Clients" },
];

const timeline = [
  { year: "2012", title: "Founded with a refined vision" },
  { year: "2017", title: "First hospitality flagship completed" },
  { year: "2021", title: "Expanded into full turnkey luxury design" },
  { year: "2024", title: "Recognized for artisanal craftsmanship" },
];

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Column: Details & Narrative */}
          <motion.div
            className={styles.details}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.labelBadge}>
              <span className={styles.badgeDot} />
              <span className={styles.sectionLabel}>About the Studio</span>
            </div>

            <h2 className={styles.heading}>
              We create interiors that feel tailored, timeless, and distinctly luminous.
            </h2>

            <p className={styles.leadText}>
              Shree Sai Interiors combines architectural precision, material mastery, and a calm, curated palette to deliver spaces that feel warm, intimate, and deeply considered.
            </p>

            <div className={styles.storyBlocks}>
              <article className={styles.storyCard}>
                <h3>Our Story</h3>
                <p>
                  Originating from a passion for refined spaces, our team brings a subtle luxury that is never loud—focusing on quiet elegance and exceptional detail.
                </p>
              </article>

              <article className={styles.storyCard}>
                <h3>Our Vision</h3>
                <p>
                  A calm, harmonious environment is the true foundation of modern luxury. We design every space to evoke tranquility and effortless living.
                </p>
              </article>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Visual Collage */}
          <motion.div
            className={styles.visuals}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className={styles.imageFramePrimary}>
              <Image
                src="/images/about-01.jpg"
                alt="Architectural interior view"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay} />
              <div className={styles.goldCornerTL} />
            </div>

            <div className={styles.imageFrameSecondary}>
              <Image
                src="/images/about-02.jpg"
                alt="Luxury interior detail"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.goldCornerBR} />
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Row */}
        <div className={styles.statsRow}>
          {facts.map((item, index) => (
            <motion.div
              key={item.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.statHeader}>
                <span className={styles.statValue}>{item.value}</span>
                <span className={styles.statAccentLine} />
              </div>
              <p className={styles.statLabel}>{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Roadmap */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineHeader}>
            <span className={styles.timelineTitle}>Our Journey</span>
            <div className={styles.timelineTrackLine} />
          </div>

          <div className={styles.timelineGrid}>
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.yearNode}>
                  <span className={styles.nodeDot} />
                  <span className={styles.yearText}>{entry.year}</span>
                </div>
                <p className={styles.entryTitle}>{entry.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}