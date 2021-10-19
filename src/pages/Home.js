import React from "react";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <Testimonials />
    </>
  );
}
