import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      {/* Dark Overlay for Readability */}
      <div className={styles.overlay}></div>

      <div className={styles.footerContent}>
        <div className={styles.footerInner}>
          {/* Brand Block */}
          <div className={styles.brandBlock}>
            <div className={styles.logoWrapper}>
              <img 
                src="/Shree Sai Interiors Logo.png" 
                alt="Shree Sai Interiors Logo" 
                className={styles.brandLogo} 
              />
              <p className={styles.brandTitle}>
                SHREE SAI<br />
                <span>INTERIORS</span>
              </p>
            </div>
            <p className={styles.brandText}>
              Complete Interior & Turnkey Solutions for Residential and Commercial Spaces.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
            </div>
          </div>

          {/* Nav Links Wrapper for Mobile Split */}
          <div className={styles.linksGrid}>
            {/* Quick Links */}
            <div className={styles.linkColumn}>
              <p className={styles.linkHeading}>Quick Links</p>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact Us</a>
            </div>

            {/* Expertise */}
            <div className={styles.linkColumn}>
              <p className={styles.linkHeading}>Our Expertise</p>
              <a href="#turnkey">Turnkey Solutions</a>
              <a href="#flooring">Flooring Solutions</a>
              <a href="#wall-ceiling">Wall & Ceiling</a>
              <a href="#civil">Civil & Finishing</a>
              <a href="#smart">Smart Building</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className={styles.contactColumn}>
            <p className={styles.linkHeading}>Contact Us</p>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.icon} />
                <span>+91 9168268068</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.icon} />
                <span>interiorsshreesai05@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.icon} />
                <span>123, ABC Road, Nashik, Maharashtra - 422001</span>
              </div>
              <div className={styles.contactItem}>
                <Clock size={18} className={styles.icon} />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>© 2026 Shree Sai Interiors. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.divider}>•</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}