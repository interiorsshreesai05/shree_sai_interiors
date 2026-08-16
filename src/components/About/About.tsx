"use client";

import { motion, useMotionValue, useTransform, animate, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./About.module.css";

// Stats Data
const facts = [
  { value: "350+", label: "Projects Completed", description: "Villas, apartments & commercial spaces" },
  { value: "16+", label: "Years Experience", description: "Delivering luxury interior design" },
  { value: "97%", label: "Happy Clients", description: "Built on trust and repeat referrals" },
];

// Timeline Data
const timeline = [
  { year: "2010", description: "Founded with a passion for quality interior design" },
  { year: "2015", description: "Completed our first major residential project" },
  { year: "2020", description: "Expanded our expertise across residential and commercial interiors" },
  { year: "2026", description: "Recognized as a leading luxury interior studio" },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function JourneySection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <motion.div
          className={styles.journeyHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} />
            <span className={styles.journeySubLabel}>MILESTONES</span>
            <span className={styles.kickerLine} />
          </div>
          <h2 className={styles.journeyTitle}>Our Growth Journey</h2>
          <p className={styles.journeySubtitle}>
            A decade of craftsmanship, trust, and spaces we&apos;re proud to have built.
          </p>
        </motion.div>

        <div className={styles.timelineWrapper} ref={wrapperRef}>
          <div className={styles.milestonesGrid}>
            <div className={styles.axisTrack} />
          <div className={styles.axisProgress} />

            {timeline.map((entry, index) => (
              <motion.div
                key={entry.year}
                className={styles.milestoneItem}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.nodeCircle}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className={styles.stem} />
                <div className={styles.milestoneCard}>
                  <span className={styles.milestoneYear}>{entry.year}</span>
                  <div className={styles.yearDivider} />
                  <p className={styles.milestoneDesc}>{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* Dark Main About Section */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          
          {/* Main Content Grid */}
          <div className={styles.contentGrid}>
            {/* Left Column */}
            <motion.div
              className={styles.details}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.labelBadge}>
                <span className={styles.badgeDot} />
                <span className={styles.sectionLabel}>About Our Studio</span>
              </div>

              <h2 className={styles.heading}>
                We design comfortable, elegant spaces tailored to your lifestyle.
              </h2>

              <p className={styles.leadText}>
                Shree Sai Interiors brings together smart space planning, high-quality materials, and expert craftsmanship to create homes and commercial spaces that look stunning and feel functional.
              </p>

              <div className={styles.storyBlocks}>
                <article className={styles.storyCard}>
                  <h3>Our Approach</h3>
                  <p>
                    We listen carefully to your requirements and manage every detail—from initial layout drawings to final site execution—so the process is stress-free.
                  </p>
                </article>

                <article className={styles.storyCard}>
                  <h3>Our Quality</h3>
                  <p>
                    Every material is chosen for durability and beauty. We ensure precise craftsmanship so your interiors stay timeless for years to come.
                  </p>
                </article>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className={styles.visuals}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className={styles.imageFramePrimary}>
                <Image
                  src="/abtouimage.png"
                  alt="Modern interior design showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={styles.image}
                  priority
                />
                <div className={styles.imageOverlay} />
                <div className={styles.goldCornerTL} />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className={styles.statsRow}>
            {facts.map((item, index) => (
              <motion.div
                key={item.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.statTopRow}>
                  <span className={styles.statValue}>
                    <AnimatedNumber value={item.value} />
                  </span>
                  <div className={styles.goldBadgeIndicator} />
                </div>
                <h4 className={styles.statLabel}>{item.label}</h4>
                <p className={styles.statDesc}>{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium Journey / Timeline Section */}
      <JourneySection />
    </>
  );
}