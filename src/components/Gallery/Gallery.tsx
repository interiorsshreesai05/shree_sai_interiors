"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles, Maximize2 } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryImages = [
  {
    id: 1,
    src: "/Homepage.png",
    title: "Sculptural Marble Detail",
    category: "Living Lounge",
  },
  {
    id: 2,
    src: "/Homepage.png",
    title: "Ambient Brass Lighting",
    category: "Dining Suite",
  },
  {
    id: 3,
    src: "/03.png",
    title: "Custom Wood Joinery",
    category: "Master Suite",
  },
  {
    id: 4,
    src: "/04.png",
    title: "Textured Fluted Wall",
    category: "Executive Study",
  },
  {
    id: 5,
    src: "/05.png",
    title: "Architectural Cove Light",
    category: "Foyer Gallery",
  },
  {
    id: 6,
    src: "/03.png",
    title: "Minimalist Stone Vanity",
    category: "Powder Room",
  },
];

// Duplicate the array so the continuous marquee seamless repeats
const marqueeTrack = [...galleryImages, ...galleryImages];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={styles.container}>
        {/* Compact Header Block */}
        <div className={styles.headerRow}>
          <div className={styles.labelBadge}>
            <Sparkles size={13} className={styles.badgeIcon} />
            <span className={styles.sectionLabel}>Gallery</span>
          </div>
          <h2 className={styles.heading}>
            Every surface speaks with quiet refinement.
          </h2>
        </div>
      </div>

      {/* Horizontal Infinite Slider Track */}
      <div className={styles.sliderWrapper}>
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeTrack.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={styles.galleryCard}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="340px"
                className={styles.image}
              />
              
              <div className={styles.cardOverlay}>
                <div className={styles.expandIcon}>
                  <Maximize2 size={16} />
                </div>
                <div>
                  <span className={styles.categoryPill}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.lightboxCard}
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className={styles.lightboxImage}
                  priority
                />
              </div>

              <div className={styles.lightboxMeta}>
                <span className={styles.modalCategory}>{selectedImage.category}</span>
                <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}