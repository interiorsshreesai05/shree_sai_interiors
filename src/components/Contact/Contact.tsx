"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles, Mail, Phone } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Background Lighting Detail */}
      <div className={styles.ambientGlow} />

      <div className={styles.innerGrid}>
        {/* Contact Copy & Details */}
        <div className={styles.contactIntro}>
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
            <div>
              <div className={styles.metaHeader}>
                <Mail size={15} />
                <span>Email</span>
              </div>
              <p>hello@shreesaiinteriors.com</p>
            </div>
            <div>
              <div className={styles.metaHeader}>
                <Phone size={15} />
                <span>Phone</span>
              </div>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <p className={styles.contactFooterText}>
            Every conversation begins with understanding your lifestyle, material
            preferences, and sense of calm.
          </p>
        </div>

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

          <label className={`${styles.fieldLabel} ${styles.fullWidth}`}>
            <span className={styles.fieldLabelText}>Project Brief</span>
            <textarea
              className={styles.inputArea}
              name="message"
              placeholder="Describe the space and your vision"
              rows={5}
              required
            />
          </label>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              <>
                <CheckCircle2 size={16} /> Sent
              </>
            ) : (
              <>
                Send Inquiry <Send size={14} />
              </>
            )}
          </button>
        </motion.form>
      </div>

      {/* Custom Map Container */}
      <div className={styles.mapPlaceholder}>
        <iframe
          title="Studio Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26418721735!2d73.72107883395982!3d20.01103080000001!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0e911293a9%3A0xe2f357f892a06f34!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapIframe}
        />
      </div>
    </section>
  );
}