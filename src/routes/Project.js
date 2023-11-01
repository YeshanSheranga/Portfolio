import React from "react";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
// import WorkCard from "../components/WorkCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <CommonHero heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer />
    </div>
  );
};

export default Project;
