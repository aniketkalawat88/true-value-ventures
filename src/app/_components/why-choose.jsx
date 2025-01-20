import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function WhyChoose() {
  const variants = {
    start: { y: 100, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  const arr = [
    {
      icon: "fas fa-star",
      title: "Trusted Quality",
      description:
        "We deliver only the best, certified by global quality standards.",
    },
    {
      icon: "fas fa-truck",
      title: "On-Time Delivery",
      description:
        "Ensuring your shipments arrive on time, every time.",
    },
    {
      icon: "fas fa-users",
      title: "Dedicated Support",
      description:
        "Our team is available 24/7 to assist you with your trade needs.",
    },
  ]
  return (
    <div className="why-choose-us bg-white py-16">
      <div className="container max-w-7xl mx-auto px-6 text-center overflow-hidden">
        <h2 className="text-3xl font-bold text-primary-main mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arr.map((item, index) => (
            <MotionDiv
            variants={variants}
            initial={variants.start}
            whileInView={variants.end}
            transition={{ duration: 0.4, delay: 0.4 * index }}
            viewport={{ once : true}}
              key={index}
              className="bg-gray-100 p-6 shadow-sm rounded-md text-center hover:shadow-md"
            >
              <i
                className={`${item.icon} text-secondary-main text-4xl mb-4`}
              ></i>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
