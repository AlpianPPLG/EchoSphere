import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BlogSection from "./components/Blog";
import ServiceSection from "./components/Service";
import PricingSection from "./components/Pricing";
import FeatureSection from "./components/Feature";
import TestimonialSection from "./components/Testimony";
import FAQSection from "./components/FAQ";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <BlogSection />
        <ServiceSection />
        <PricingSection />
        <FeatureSection />
        <TestimonialSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
