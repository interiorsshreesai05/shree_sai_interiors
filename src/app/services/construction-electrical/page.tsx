"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, HardHat, ShieldCheck, Wrench, Zap, Sun, Sparkles } from "lucide-react";
import styles from "./page.module.css";

const constructionServices = [
  {
    title: "Civil Works",
    description: "End-to-end structural construction, masonry, renovations, and foundation work executed with engineered safety standards.",
    image: "/CivilWork.png",
    specs: ["Structural Masonry", "RCC Construction", "Commercial Fit-outs"],
    icon: HardHat
  },
  {
    title: "Epoxy Flooring",
    description: "Industrial-grade seamless epoxy coatings providing seamless chemical resistance, high durability, and polished appeal.",
    image: "/Pro.png",
    specs: ["Anti-Slip Finish", "Chemical Resistant", "Heavy Load Capacity"],
    icon: ShieldCheck
  },
  {
    title: "Electrical Services",
    description: "Complete low and high-voltage wiring, panel installation, circuit design, and industrial electrical audits.",
    image: "/Electrical.png",
    specs: ["3-Phase Panel Setup", "Load Balancing", "Short-Circuit Protection"],
    icon: Zap
  },
  {
      title: "Solar Solutions",
      description: "Turnkey rooftop solar panel installations for eco-friendly power generation and long-term energy cost savings.",
    image: "/image33.png",
    specs: ["On-Grid & Hybrid", "Net Metering Setup", "High-Efficiency Cells"],
    icon: Sun
  },
  {
    title: "Outdoor Lighting",
    description: "Architectural facade, garden, and perimeter security lighting engineered for weather endurance.",
    image: "/OutdoorL.png",
    specs: ["IP67 Weatherproof", "Automated Sensors", "Low Voltage LEDs"],
    icon: Sparkles
  },
  {
    title: "Pressure Washing",
    description: "Deep exterior cleaning for building facades, driveways, and industrial sites to remove grease, mold, and heavy stain buildup.",
    image: "/Washing.png",
    specs: ["High-PSI Hydro Wash", "Eco-Friendly Agents", "Facade Restorations"],
    icon: Wrench
  },
];

export default function ConstructionElectricalPage() {
  return (
    <main className={styles.page}>
      {/* Fixed Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
<ArrowLeft size={18} />
          <span>Back</span>
        </Link>
        <h2 className={styles.brand}>Shree Sai Construction & Electrical</h2>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/Construction.avif"
          alt="Construction & Electrical"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Industrial & Commercial Grade</span>
          <h1>Construction & Electrical</h1>
          <p>Heavy-duty civil infrastructure, precision electrical installations, and modern renewable energy solutions built to last.</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.servicesGrid}>
        {constructionServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardImageWrapper}>
                <Image src={service.image} alt={service.title} fill className={styles.cardImage} />
                <div className={styles.iconTag}>
                  <Icon size={20} />
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.specChips}>
                  {service.specs.map((spec) => (
                    <span key={spec} className={styles.chip}>{spec}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Planning a Civil or Electrical Project?</h2>
        <p>Get in touch with our engineering team for site visits and structural estimations.</p>
        <Link href="/#contact" className={styles.ctaButton}>Get Quotation</Link>
      </section>
    </main>
  );
}