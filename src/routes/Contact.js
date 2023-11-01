import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <CommonHero heading="CONTACT US" text="Lets have a chat"/>
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
