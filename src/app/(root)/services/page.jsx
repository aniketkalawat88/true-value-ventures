import React from "react";
import HeroSection2 from "../_components/hero-section2";
import Service from "../_components/service";
import ServiceSection from "../_components/service-section";
import WhyChoose from "../_components/why-choose";
import OurClients from "../_components/our-clients";
import Link from "next/link";
import ProductDropdown from "../_components/product";

export default function Services() {
  return (
    <div>
      <HeroSection2 
        name={"Our Products"} 
        img={"/02.png"} 
      />
      {/* <Service /> */}
      <ProductDropdown />
      <div className="services-page bg-gray-100">

        {/* <ServiceSection />
        <WhyChoose />
        <OurClients /> */}

      </div>
    </div>
  );
}
