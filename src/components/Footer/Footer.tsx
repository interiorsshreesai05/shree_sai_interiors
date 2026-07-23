import { Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerInner}>
        <div className={styles.brandBlock}>
          <p className={styles.brandTitle}>Shree Sai Interiors</p>
          <p className={styles.brandText}>
            Luxury interiors informed by architecture, material depth, and serene proportions.
          </p>
          <p className={styles.brandNote}>
            Custom design, thoughtful detailing, and a collaborative process built for modern living.
          </p>
        </div>

        <div className={styles.linksGrid}>
          <div>
            <p className={styles.linkHeading}>Quick Links</p>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <p className={styles.linkHeading}>Contact</p>
            <a href="mailto:hello@shreesaiinteriors.com">
              <Mail size={16} /> hello@shreesaiinteriors.com
            </a>
            <a href="tel:+919876543210">
              <Phone size={16} /> +91 98765 43210
            </a>
          </div>

          <div className={styles.socialBlock}>
            <p className={styles.linkHeading}>Follow</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram">
                <span className={styles.socialText}>IG</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span className={styles.socialText}>IN</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2026 Shree Sai Interiors. Crafted for enduring luxury.</span>
      </div>
    </footer>
  );
}
