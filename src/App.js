import { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import About from "components/About";
import ProjectSection from "components/ProjectSection";
import Footer from "components/Footer";
import LoadingScreen from "components/LoadingScreen";

import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen setLoading={setLoading} />;
  }

  return (
    <div className="container">
      <Navbar />
      <div className="hero-section">
        <div className="hider">scroll down</div>
        <div className="hero-3d-object">
          <iframe
            title="Earth 3D Model"
            src="https://my.spline.design/untitled-5711b2136528fef6ff0adf122f22ac2d/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="content-wrapper">
          <div className="name">Akshat Vishwakarma</div>
          <div className="position">Frontend developer</div>
          <div className="portfolio-text">portfolio</div>
        </div>
        <div className="scroll-down-wrapper">
          <div className="line" />
          <div className="line line-lg" />
          <div className="line" />
        </div>
      </div>
      <About />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
