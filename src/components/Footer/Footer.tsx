import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  const phoneNumber = "+919168268068";
  const emailAddress = "info@interiorsshreesai.com";
  const whatsappNumber = "919168268068";
  const mapsQueryUrl = "https://www.google.com/maps/place/19%C2%B058'35.2%22N+73%C2%B050'10.8%22E/@19.9764412,73.8337687,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.9764412!4d73.8363436!18m1!1e1?entry=ttu";

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
              <a href="https://www.facebook.com/profile.php?id=61592183887632" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={16} /></a>
              <a href="https://www.instagram.com/shreesai.interiors?igsh=MWltZWR5bmY4cHNwYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="https://x.com/SSaiInteriors" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaXTwitter size={16} /></a>
              <a href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={16} /></a>
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
                <a href={`tel:${phoneNumber}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}>
                  <Phone size={18} className={styles.icon} />
                  <span>+91 9168268068</span>
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href={`mailto:${emailAddress}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}>
                  <Mail size={18} className={styles.icon} />
                  <span>info@interiorsshreesai.com</span>
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href={mapsQueryUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}>
                  <MapPin size={18} className={styles.icon} />
                  <span>Shree Sai Business Group, 2nd floor dusane golden bricks, narayan bapu nagar, jail road, nashik road, nashik</span>
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}>
                  <Clock size={18} className={styles.icon} />
                  <span>Mon - Sat: 9:30 AM - 6:30 PM (WhatsApp Us)</span>
                </a>
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