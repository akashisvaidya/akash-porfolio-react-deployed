import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";

import { Portfolio } from "../src/components/portfolio/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Portfolio />
    </>
  );
}

export default App;
