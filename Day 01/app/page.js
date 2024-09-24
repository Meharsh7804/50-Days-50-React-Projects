import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./services";
import AboutUs from "./about-us";
import Cases from "./case";
import Testimonials from "./testimonials";
import Footer from "./footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Cases />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
