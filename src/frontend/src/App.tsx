import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalConsultancy from "./components/GlobalConsultancy";
import Hero from "./components/Hero";
import IndustrySegments from "./components/IndustrySegments";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TrustStrip from "./components/TrustStrip";
import Videos from "./components/Videos";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustStrip />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="industry-segments">
          <IndustrySegments />
        </section>
        <section id="videos">
          <Videos />
        </section>
        <section id="global">
          <GlobalConsultancy />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
