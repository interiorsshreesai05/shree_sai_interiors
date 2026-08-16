"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Sparkles, Mail, Phone, Loader2, MapPin, ExternalLink } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumber = "+919168268068";
  const emailAddress = "interiorsshreesai05@gmail.com";
  const whatsappNumber = "919168268068";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Background Lighting Detail */}
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.innerGrid}>
          {/* Contact Copy & Details */}
          <motion.div 
            className={styles.contactIntro}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.labelBadge}>
              <Sparkles size={12} className={styles.badgeIcon} />
              <span className={styles.sectionLabel}>Contact</span>
            </div>

            <h2>Begin a project that feels refined, warm and entirely yours.</h2>

            <p>
              Reach out to discuss residential, office, retail or hospitality interiors.
              Let’s design a space that lives like a luxury sanctuary.
            </p>

            <div className={styles.contactMeta}>
              <div className={styles.metaCard}>
                <div className={styles.metaHeader}>
                  <Mail size={15} />
                  <span>Email</span>
                </div>
                <p>
                  <a href={`mailto:${emailAddress}`} style={{ color: "inherit", textDecoration: "none" }}>
                    interiorsshreesai05@gmail.com
                  </a>
                </p>
              </div>
              
              <div className={styles.metaCard}>
                <div className={styles.metaHeader}>
                  <Phone size={15} />
                  <span>Phone</span>
                </div>
                <p>
                  <a href={`tel:${phoneNumber}`} style={{ color: "inherit", textDecoration: "none" }}>
                    +91 9168268068
                  </a>
                  {" / "}
                  <a href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <p className={styles.contactFooterText}>
              Every conversation begins with understanding your lifestyle, material
              preferences, and sense of calm.
            </p>
          </motion.div>

          {/* Form Card Component */}
          <motion.form
            className={styles.formCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
          >
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldLabelText}>Name</span>
                <input
                  className={styles.inputField}
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              
              <label className={styles.fieldLabel}>
                <span className={styles.fieldLabelText}>Email</span>
                <input
                  className={styles.inputField}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldLabelText}>Phone</span>
                <input
                  className={styles.inputField}
                  type="tel"
                  name="phone"
                  placeholder="+91 00000 00000"
                />
              </label>

              <label className={styles.fieldLabel}>
                <span className={styles.fieldLabelText}>Space Type</span>
                <select className={styles.selectField} name="spaceType" defaultValue="">
                  <option value="" disabled>Select Space</option>
                  <option value="residential">Residential</option>
                  <option value="office">Office / Commercial</option>
                  <option value="retail">Retail Space</option>
                  <option value="hospitality">Hospitality</option>
                </select>
              </label>
            </div>

            <label className={`${styles.fieldLabel} ${styles.fullWidth}`}>
              <span className={styles.fieldLabelText}>Project Brief</span>
              <textarea
                className={styles.inputArea}
                name="message"
                placeholder="Describe the space and your vision..."
                rows={4}
                required
              />
            </label>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || isSubmitted}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.span 
                    key="loading"
                    className={styles.buttonContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Loader2 size={16} className={styles.spinner} /> Sending...
                  </motion.span>
                ) : isSubmitted ? (
                  <motion.span 
                    key="submitted"
                    className={styles.buttonContent}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 size={16} /> Sent Successfully
                  </motion.span>
                ) : (
                  <motion.span 
                    key="default"
                    className={styles.buttonContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Send Inquiry <Send size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.form>
        </div>

        {/* Custom Map Container with Default Satellite View */}
        <div className={styles.mapPlaceholder}>
          <a
            href="https://maps.app.goo.gl/wQT6mqYyXBj6KamU9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapOverlayLink}
            title="Open location in Google Maps"
          >
            <span className={styles.mapBadge}>
              <MapPin size={14} className={styles.pinIcon} />
              <span>Shree Sai Interiors</span>
              <ExternalLink size={12} />
            </span>
          </a>
          <iframe
            title="Studio Location Map"
           src="https://maps.google.com/maps?q=19.976444,73.836333&hl=en&z=17&t=k&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          />
        </div>
      </div>
    </section>
  );
}