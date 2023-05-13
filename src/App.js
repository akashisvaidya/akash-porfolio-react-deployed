import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";

import { Portfolio } from "../src/components/portfolio/Portfolio";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Portfolio />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
