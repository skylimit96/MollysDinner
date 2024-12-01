import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeaderSection from "./components/Header/HeaderSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ProSection from "./components/Professional/ProSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import RatingSection from "./components/Rating/RatingSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection />
      <SkillsSection />
      <ProSection />
      <ExperienceSection />
      <RatingSection />
      <Footer />
    </div>
  );
}

export default App;
