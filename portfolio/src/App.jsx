import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import "./General.css";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
