import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section id="home" className={styles.section}>
        <Hero />
      </section>

      <section id="about" className={styles.section}>
        <About />
      </section>

      <section id="services" className={styles.section}>
        <Services />
      </section>

      <section id="portfolio" className={styles.section}>
        <Portfolio />
      </section>

      <section id="gallery" className={styles.section}>
        <Gallery />
      </section>

      <section id="contact" className={styles.section}>
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
