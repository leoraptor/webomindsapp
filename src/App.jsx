import React from "react";
import GsapText from "./components/GsapText";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="p-10 overflow-auto mx-auto w-[100vw]%">
        <GsapText />
      </div>
      <Footer />
    </div>
  );
};

export default App;
