"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, ShieldAlert, Wifi, Camera, Server, Lock } from "lucide-react";
import styles from "./page.module.css";

const techServices = [
  {
    title: "Computer & Networking",
    category: "IT Infrastructure",
    description: "Enterprise LAN/WAN setup, structured Cat6 cabling, server racks, high-speed routing, and optimized network topology.",
    image: "/Computer.png",
    features: [
      { label: "Bandwidth Optimization", value: "Gigabit+" },
      { label: "Hardware Support", value: "Cisco / Ubiquiti" },
      { label: "Uptime Protocol", value: "99.9%" }
    ],
    icon: Server
  },
  {
    title: "CCTV & Security Systems",
    category: "Surveillance & Access Control",
    description: "4K IP surveillance cameras, AI video analytics, biometric access control, remote mobile viewing, and central NVR storage.",
    image: "/CCTV.png",
    features: [
      { label: "Resolution Standard", value: "4K Ultra HD" },
      { label: "Night Vision", value: "Infrared / Color" },
      { label: "Remote Access", value: "iOS / Android" }
    ],
    icon: Camera
  }
];

export default function TechSecurityPage() {
  return (
    <main className={styles.page}>
      {/* Top Navbar */}
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={18} />
          <span>Back</span>
        </Link>
        <div className={styles.brandGroup}>
          <span className={styles.liveDot} />
          <h2 className={styles.brand}>Shree Sai Tech & Security</h2>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.techTag}>High-Tech Protection & Connectivity</span>
          <h1>Technology & Security</h1>
          <p>Deploying smart IP surveillance, secure networking frameworks, and automated access systems for modern enterprises.</p>
        </motion.div>
      </section>

      {/* Interactive Tech Matrix */}
      <section className={styles.servicesSection}>
        {techServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className={styles.techBlock}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageBox}>
                <Image src={service.image} alt={service.title} fill className={styles.image} />
                <div className={styles.categoryBadge}>{service.category}</div>
              </div>

              <div className={styles.contentBox}>
                <div className={styles.titleRow}>
                  <div className={styles.iconGlow}>
                    <Icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                </div>

                <p>{service.description}</p>

                {/* Dashboard Metrics */}
                <div className={styles.metricsGrid}>
                  {service.features.map((feat) => (
                    <div key={feat.label} className={styles.metricCard}>
                      <span className={styles.metricValue}>{feat.value}</span>
                      <span className={styles.metricLabel}>{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Call To Action */}
      <section className={styles.cta}>
        <div className={styles.ctaTerminal}>
          <h2>Secure Your Premises Today</h2>
          <p>Speak with our system architects for custom network diagrams and security site surveys.</p>
          <Link href="/#contact" className={styles.ctaButton}>Request Tech Audit</Link>
        </div>
      </section>
    </main>
  );
}