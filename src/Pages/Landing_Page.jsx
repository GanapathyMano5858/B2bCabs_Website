import React from "react";
import Navbar from "../Component/Nav_Bar/NavBar";
import Intro from "../Component/Intro/Intro";
import AboutUS from "../Component/AboutUS/AboutUS";
import WhyChooseUs from "../Component/WhyChooseUs/WhyChooseUs";
import Facts from "../Component/Facts/Facts";
import KeyFeatures from "../Component/KeyFeatures/KeyFeatures";
import Ads from "../Component/Ads/Ads";
import Footer from "../Component/Footer/Footer";

const Landing_Page = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutUS />
      <WhyChooseUs />
      <Facts />
      <KeyFeatures />
      <Ads />
      <Footer />
    </div>
  );
};

export default Landing_Page;
