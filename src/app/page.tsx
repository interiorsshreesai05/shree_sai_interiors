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
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}