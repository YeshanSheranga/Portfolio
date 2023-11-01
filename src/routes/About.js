import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <CommonHero heading="ABOUT" text="I am friendly Full stack Engineer"/>
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
