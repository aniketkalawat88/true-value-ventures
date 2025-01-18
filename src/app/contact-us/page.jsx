import React from "react";
import HeroSection2 from "../_components/hero-section2";
import HappyClient from "../_components/happy-client";
import Testimonal from "../_components/testimonal";
import ContactUS from "../_components/contact-us";
import ContactMap from "./_components/contact-map";

export default function ContactUs() {
  return (
    <>
    
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  rel="stylesheet"/>
        <link  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"  rel="stylesheet"/>
      <HeroSection2
        name={"Contact Us"}
        img={
          "https://study.com/cimages/videopreview/videopreview-full/2gddp5q8k4.jpg"
        }
      />

<section className="my-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary-main mb-6 text-center">
            Why Our Customers Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-md text-center">
              <i className="fas fa-thumbs-up text-secondary-main text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Unmatched Quality</h3>
              <p>We prioritize delivering the finest produce to every client.</p>
            </div>
            <div className="bg-white p-6 shadow-md text-center">
              <i className="fas fa-handshake text-secondary-main text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Reliable Partnerships</h3>
              <p>Trusted by global clients for consistent and dependable service.</p>
            </div>
            <div className="bg-white p-6 shadow-md text-center">
              <i className="fas fa-heart text-secondary-main text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Customer-Centric</h3>
              <p>Your satisfaction is at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto my-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md text-center">
            <i className="fas fa-seedling text-secondary-main text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Freshness Guaranteed</h3>
            <p>Handpicked produce delivered with care to your doorstep.</p>
          </div>
          <div className="bg-white p-6 shadow-md text-center">
            <i className="fas fa-plane text-secondary-main text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Seamless Logistics</h3>
            <p>
              Efficient global supply chain ensuring timely deliveries worldwide.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md text-center">
            <i className="fas fa-hand-holding-heart text-secondary-main text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
            <p>Committed to eco-friendly and sustainable farming methods.</p>
          </div>
        </div>
      </section>

      <ContactUS />
      <ContactMap />
      
    </>
  );
}
