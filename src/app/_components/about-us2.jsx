import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function AboutUs2() {
  const variants = {
    startLeft: { x: -100, opacity: 0 },
    endLeft: { x: 0, opacity: 1 },
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:px-0 px-6 md:my-10 my-6 gap-8 overflow-hidden">
        <MotionDiv
          variants={variants}
          initial={variants.startLeft}
          whileInView={variants.endLeft}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pr-0 md:pr-10"
        >
          <h2 className="text-secondary-main text-lg md:text-xl font-semibold text-center md:text-left">
            Why Choose True Value Ventures?
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-main mt-4 text-center md:text-left">
            Your Trusted Partner in Global Trade
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            {`At True Value Ventures, we are dedicated to delivering top-quality Indian agricultural products to global markets. Our commitment to excellence, competitive pricing, and customer satisfaction sets us apart.`}
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-6 space-y-2">
            <li>
              <strong>Comprehensive Product Range:</strong> From mustard oil to
              dehydrated vegetables, biomass pallets, and spirulina, we offer
              high-quality products for global export.
            </li>
            <li>
              <strong>Quality Assurance:</strong> We ensure all our products
              meet international standards for quality and safety.
            </li>
            <li>
              <strong>Competitive Pricing:</strong> Delivering the best value
              without compromising quality.
            </li>
            <li>
              <strong>Timely Delivery:</strong> We understand the importance of
              punctuality and reliability in global trade.
            </li>
          </ul>
        </MotionDiv>
        <MotionDiv
          variants={variants}
          initial={variants.start}
          animate={variants.end}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-seedling text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Agricultural Excellence
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-industry text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Biomass Pallets
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-leaf text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Spirulina Products
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-truck text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Timely Delivery
            </h3>
          </div>
        </MotionDiv>
      </div>
    </>
  );
}
