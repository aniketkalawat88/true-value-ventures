import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function ServiceSection() {
  const arr = [
    {
      icon: "fas fa-shipping-fast",
      title: "Global Shipping",
      description:
        "Reliable and efficient shipping services connecting international markets seamlessly.",
    },
    {
      icon: "fas fa-warehouse",
      title: "Storage & Packaging",
      description:
        "Secure storage and expert packaging to preserve product quality.",
    },
    {
      icon: "fas fa-leaf",
      title: "Fresh Produce Supply",
      description:
        "Premium-quality fresh fruits and vegetables sourced from trusted growers.",
    },
    {
      icon: "fas fa-globe",
      title: "Market Expansion",
      description:
        "Strategic insights and opportunities to grow your business globally.",
    },
    {
      icon: "fas fa-money-check",
      title: "Competitive Pricing",
      description: "Cost-effective solutions for all your export-import needs.",
    },
    {
      icon: "fas fa-handshake",
      title: "Trade Consultation",
      description: "Expert advisory services to streamline your operations.",
    },
  ];
  const variants = {
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };
  return (
    <div className="container max-w-7xl mx-auto px-6 py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-primary-main text-center mb-8">
        Our Premium Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {arr.map((service, index) => (
          <MotionDiv
            variants={variants}
            initial={variants.start}
            whileInView={variants.end}
            transition={{ duration: 0.4, delay: 0.2 * index }}
            viewport={{ once : true}}
            key={index}
            className="service-card bg-white p-6 shadow-md rounded-md text-center hover:shadow-lg hover:scale-105 transform transition-all"
          >
            <i
              className={`${service.icon} text-secondary-main text-5xl mb-4`}
            ></i>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
