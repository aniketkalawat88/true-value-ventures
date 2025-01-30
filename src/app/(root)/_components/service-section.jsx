import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function ServiceSection() {
  const arr = [
    {
      icon: "fas fa-cogs",
      title: "Rapeseed Meal",
      description:
        "A high-protein animal feed ingredient, perfect for livestock, poultry, and aquaculture diets.",
    },
    {
      icon: "fas fa-truck",
      title: "Livestock Feed Delivery",
      description:
        "Fast and reliable delivery of quality animal feed to ensure your livestock stays healthy and nourished.",
    },
    {
      icon: "fas fa-piggy-bank",
      title: "Affordable Pricing",
      description:
        "Cost-effective feed solutions that meet both your budget and nutritional requirements.",
    },
    {
      icon: "fas fa-seedling",
      title: "Sustainable Sourcing",
      description:
        "We source our ingredients sustainably to ensure the highest quality while supporting eco-friendly practices.",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Nutrition Consultation",
      description:
        "Expert advice on formulating balanced diets for your animals to promote growth and overall health.",
    },
    {
      icon: "fas fa-box-open",
      title: "Packaging & Storage",
      description:
        "Reliable packaging and storage solutions to maintain the quality and freshness of animal feed products.",
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
            viewport={{ once: true }}
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
