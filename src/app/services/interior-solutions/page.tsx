"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import styles from "./page.module.css";

const services = [
  {
    title: "Flooring",
    description:
      "Premium marble, vitrified tiles, wooden flooring, and designer solutions crafted to elevate every interior space.",
    image:
      "/Flooring.jpeg",
    highlights: ["Italian Marble & Vitrified", "Hardwood & Laminated", "Precision Edge Laying"],
    badge: "Popular"
  },
  {
    title: "Wallpapers & Wall Panels",
    description:
      "Transform plain walls into elegant focal points with luxurious wallpapers and modern decorative wall panels.",
    image:
      "/Wallpapers.jpeg",
    highlights: ["3D Acoustic Panels", "Imported Fabric Wallpapers", "Custom Murals"],
    badge: "Trending"
  },
  {
    title: "Painting",
    description:
      "High-quality interior and exterior painting services with flawless finishes and long-lasting premium coatings.",
    image:
      "/Painting.png",
    highlights: ["Royal Velvet Finish", "Anti-Fungal Exterior Coat", "Texture & Stencil Design"],
    badge: "Essential"
  },
  {
    title: "POP & Ceiling",
    description:
      "Modern false ceilings with elegant lighting integration to create luxurious and contemporary interiors.",
    image:
      "/PopCeiling.jpeg",
    highlights: ["Cove Lighting Layouts", "Gypsum Board False Ceiling", "CNC Cut Elements"],
    badge: "Modern"
  },
  {
    title: "Furniture",
    description:
      "Custom-designed modular furniture crafted with premium materials for functionality and timeless aesthetics.",
    image:
      "/Furniture.png",
    highlights: ["Modular Kitchens & Wardrobes", "Ergonomic Layouts", "Soft-Close German Fittings"],
    badge: "Bespoke"
  },
  {
    title: "Curtains & Blinds",
    description:
      "Elegant curtains and modern blinds that perfectly balance privacy, lighting, and sophisticated design.",
    image:
      "/Curtains.jpeg",
    highlights: ["Motorized Smart Blinds", "Blackout & Sheer Drapes", "Custom Upholstery"],
    badge: "Premium"
  },
  {
    title: "Marble & Aluminium Work",
    description:
      "Premium marble finishes and precision aluminium fabrication for luxurious residential and commercial interiors.",
    image:
      "/Marbales.jpeg",
    highlights: ["Slim-Profile Aluminium Windows", "Countertop Fabrication", "Glass Partitions"],
    badge: "Architectural"
  },
];

export default function InteriorSolutionsPage() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <h2 className={styles.brand}>Shree Sai Interiors</h2>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
          alt="Interior Solutions"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.heroBadge}>
            <Sparkles size={14} />
            Luxury Interior Design
          </span>

          <h1>Interior Solutions</h1>

          <p>
            We create elegant interiors that combine functionality,
            craftsmanship, and premium finishes for homes, offices, and
            commercial spaces.
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.aboutCard}
        >
          <span className={styles.sectionTag}>About Service</span>

          <h2>Complete Interior Solutions Under One Roof</h2>

          <p>
            From flooring and false ceilings to custom furniture, wallpapers,
            premium painting, and elegant finishing touches, we provide complete
            interior solutions tailored to your lifestyle and vision. Every
            project is executed with meticulous attention to detail and superior
            craftsmanship.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>Customized Designs</p>
            </div>
            <div className={styles.statItem}>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>Premium</h3>
              <p>Quality Materials</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionTag}>Our Expertise</span>
          <h2>Services We Offer</h2>
        </div>

        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`${styles.serviceCard} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.serviceImage}
                />
                <span className={styles.cardTag}>{service.badge}</span>
              </div>

              <div className={styles.serviceContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.number}>
                    0{index + 1}
                  </span>
                  <h3>{service.title}</h3>
                </div>

                <p>{service.description}</p>

                {/* Highlights List */}
                <div className={styles.highlightsContainer}>
                  <span className={styles.highlightsTitle}>Key Features & Options:</span>
                  <ul className={styles.highlightsList}>
                    {service.highlights.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ctaBox}
        >
          <h2>Let's Design Your Dream Space</h2>

          <p>
            Ready to transform your interiors with premium craftsmanship and
            timeless design?
          </p>

          <Link href="/#contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}