import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";

import { Portfolio } from "../src/components/portfolio/Portfolio";
import { About } from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Portfolio />
      <About />
    </>
  );
}

export default App;
