import React from "react";
import HeroSection2 from "../_components/hero-section2";
import Service from "../_components/service";
import ServiceSection from "../_components/service-section";
import WhyChoose from "../_components/why-choose";
import OurClients from "../_components/our-clients";
import Link from "next/link";

export default function Services() {
  return (
    <div>
      <HeroSection2 
        name={"Animal Feed Ingredients - Rapeseed Meal"} 
        img={"https://media.licdn.com/dms/image/v2/D4E12AQEciG6Nxvmvhg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702509848175?e=2147483647&v=beta&t=hkPjxyM_x6vVQxwVDTmWBfwgWg4G8zvIG3GvChb4yZk"} 
      />
      <Service />
      <div className="services-page bg-gray-100">
        <div className="hero-section bg-primary-main text-white py-20 text-center">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">
            Animal Feed Ingredients - Rapeseed Meal
          </h1>
          <p className="md:text-lg text-sm max-w-4xl mx-auto">
            Rapeseed Meal is a premium, protein-rich byproduct used in animal feed formulations. Our Rapeseed Meal is sourced from trusted suppliers and is processed with state-of-the-art machinery to ensure superior quality.
          </p>
        </div>

        <ServiceSection />
        <WhyChoose />
        <OurClients />

        <div className="cta bg-primary-main text-white my-10 py-10">
          <div className="container max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Enhance Your Feed Quality?
            </h2>
            <p className="text-lg mb-6">
              Discover the nutritional benefits of our Rapeseed Meal and how it can elevate your livestock, poultry, and aquaculture feed.
            </p>
            <Link href={'/contact-us'} className="bg-secondary-main text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-secondary-main/80 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
