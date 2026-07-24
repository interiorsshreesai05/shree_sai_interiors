"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar.module.css";

const LOGO_SRC = "/Shree Sai Interiors Logo.png";

const NAV_LINKS = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Portfolio", sectionId: "portfolio" },
  { label: "Gallery", sectionId: "gallery" },
  { label: "Contact", sectionId: "contact" },
] as const;

const SCROLL_THRESHOLD = 30;
const NAV_OFFSET_FALLBACK = 80;
const navEase = [0.16, 1, 0.3, 1] as const;

type NavLinkProps = {
  sectionId: string;
  label: string;
  isActive: boolean;
  className: string;
  activeClassName: string;
  underlineClassName: string;
  onNavigate: (sectionId: string) => void;
};

function NavLinkItem({
  sectionId,
  label,
  isActive,
  className,
  activeClassName,
  underlineClassName,
  onNavigate,
}: NavLinkProps) {
  return (
    <motion.a
      href={`#${sectionId}`}
      className={`${className} ${isActive ? activeClassName : ""}`}
      aria-current={isActive ? "true" : undefined}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(sectionId);
      }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: navEase }}
    >
      <span>{label}</span>
      <motion.span
        className={underlineClassName}
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: navEase }}
      />
    </motion.a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const headerRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const getNavOffset = useCallback(
    () => headerRef.current?.getBoundingClientRect().height ?? NAV_OFFSET_FALLBACK,
    []
  );

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const offset =
        sectionId === "home" ? 0 :
        sectionId === "about" ? -10 :
        sectionId === "services" ? -10 :
        sectionId === "portfolio" ? -20 :
        sectionId === "gallery" ? 70 :
        sectionId === "contact" ? -6 :
        getNavOffset();
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      setActiveSection(sectionId);
      closeMenu();
    },
    [closeMenu, getNavOffset]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = NAV_LINKS.map(({ sectionId }) =>
      document.getElementById(sectionId)
    ).filter((section): section is HTMLElement => section !== null);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
          return;
        }
        if (window.scrollY < SCROLL_THRESHOLD) setActiveSection("home");
      },
      {
        rootMargin: `-${getNavOffset()}px 0px -40% 0px`,
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [getNavOffset]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Logo container */}
          <a
            href="#home"
            className={styles.logoLink}
            aria-label="Shree Sai Interiors home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("home");
            }}
          >
            <Image
              src={LOGO_SRC}
              alt="Shree Sai Interiors"
              width={220}
              height={65}
              className={styles.logo}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, sectionId }) => (
              <NavLinkItem
                key={sectionId}
                sectionId={sectionId}
                label={label}
                isActive={activeSection === sectionId}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
                underlineClassName={styles.navUnderline}
                onNavigate={scrollToSection}
              />
            ))}
          </nav>

          {/* Consultation CTA */}
          <div className={styles.ctaWrapper}>
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              <span>Book Consultation</span>
              <svg className={styles.ctaArrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3.333 8h9.334M8.667 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileTitle}>
  Shree Sai Interiors
</div>
          <div className={styles.mobileActions}>
            {/* Mobile Title */}

            <button
              type="button"
              className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleActive : ""}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - slides in from the left */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            <motion.aside
              className={styles.mobileMenu}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: navEase }}
            >
              <div className={styles.mobileNavContent}>
                <div className={styles.mobileMenuHeader}>
                  <Image
                    src={LOGO_SRC}
                    alt="Shree Sai Interiors"
                    width={160}
                    height={45}
                    className={styles.mobileLogo}
                  />
                  <button
                    type="button"
                    className={styles.menuClose}
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                  >
                    ✕
                  </button>
                </div>

                <nav className={styles.mobileNav}>
                  {NAV_LINKS.map(({ label, sectionId }, index) => (
                    <motion.div
                      key={sectionId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.04 + index * 0.03 }}
                    >
                      <NavLinkItem
                        sectionId={sectionId}
                        label={label}
                        isActive={activeSection === sectionId}
                        className={styles.mobileNavLink}
                        activeClassName={styles.mobileNavLinkActive}
                        underlineClassName={styles.mobileNavUnderline}
                        onNavigate={scrollToSection}
                      />
                    </motion.div>
                  ))}
                </nav>

                <div className={styles.mobileCtaWrapper}>
                  <a
                    href="#contact"
                    className={`${styles.ctaButton} ${styles.mobileCtaButton}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    <span>Book Consultation</span>
                    <svg className={styles.ctaArrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3.333 8h9.334M8.667 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}