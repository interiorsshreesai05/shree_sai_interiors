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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <a
      href={`#${sectionId}`}
      className={`${className} ${isActive ? activeClassName : ""}`}
      aria-current={isActive ? "true" : undefined}
      onClick={handleClick}
    >
      <span>{label}</span>
      <motion.span
        className={underlineClassName}
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.25, ease: navEase }}
      />
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const headerRef = useRef<HTMLElement | null>(null);
  const isManualScrolling = useRef(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const getNavOffset = useCallback(
    () => headerRef.current?.getBoundingClientRect().height ?? NAV_OFFSET_FALLBACK,
    []
  );

  /* Precise JavaScript Scroll Execution */
  const scrollToSection = useCallback(
    (sectionId: string) => {
      closeMenu();
      const targetElement = document.getElementById(sectionId);
      if (!targetElement) return;

      isManualScrolling.current = true;
      setActiveSection(sectionId);

      const navOffset = getNavOffset();
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      // Re-enable IntersectionObserver after smooth scroll finishes
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    },
    [closeMenu, getNavOffset]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Robust IntersectionObserver for Highlight Sync */
  useEffect(() => {
    const sectionElements = NAV_LINKS.map(({ sectionId }) =>
      document.getElementById(sectionId)
    ).filter((section): section is HTMLElement => section !== null);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by highest visible area in viewport
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        } else if (window.scrollY < SCROLL_THRESHOLD) {
          setActiveSection("home");
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.5, 0.8],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <Image
              src={LOGO_SRC}
              alt="Shree Sai Interiors"
              width={240}
              height={70}
              className={styles.logo}
              priority
              unoptimized
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
              onClick={(e) => {
                e.preventDefault();
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

          {/* Mobile Actions */}
          <div className={styles.mobileTitle}>Shree Sai Interiors</div>
          <div className={styles.mobileActions}>
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

      {/* Mobile Menu Overlay */}
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
                    onClick={(e) => {
                      e.preventDefault();
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