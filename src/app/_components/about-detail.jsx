import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function AboutDetail() {
  const variants = {
    startLeft: { x: -100, opacity: 0 },
    endLeft: { x: 0, opacity: 1 },
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };
  return (
    <main className="max-w-7xl mx-auto py-12 md:px-0 px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row md:space-x-12">
        <MotionDiv
          variants={variants}
          initial={variants.startLeft}
          whileInView={variants.endLeft}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl text-secondary-main font-bold">20</span>
            <span className="text-xl text-gray-600">Years of Innovation</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-main mb-4">
            Pioneering Sustainable Solutions for a Better Tomorrow
          </h2>
          <p className="text-gray-700 mb-6">
            At GreenEdge Innovations, we are committed to creating a sustainable
            future through cutting-edge technology and eco-conscious practices.
            With two decades of expertise, we deliver impactful solutions that
            empower businesses, communities, and the environment. Join us in
            shaping a greener and more sustainable tomorrow.
          </p>
          <div>
            <img
              alt="Sustainable Innovations"
              className="w-full h-auto md:h-96 object-cover rounded mb-6"
              src="https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2023/10/Trade-Route-Market-Update-1.png?fit=1545%2C825&ssl=1"
            />
          </div>
        </MotionDiv>
        <MotionDiv
          variants={variants}
          initial={variants.start}
          whileInView={variants.end}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/3 space-y-10"
        >
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-leaf text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Sustainability First
              </h3>
            </div>
            <p className="text-gray-700">
              Every project we undertake focuses on minimizing environmental
              impact while maximizing positive outcomes.
            </p>
          </div>
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-rocket text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Innovative Solutions
              </h3>
            </div>
            <p className="text-gray-700">
              Leveraging technology and creativity, we provide solutions that
              redefine industry standards.
            </p>
          </div>
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-handshake text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Trusted Partnerships
              </h3>
            </div>
            <p className="text-gray-700">
              Collaborating with global leaders to create value-driven and
              impactful outcomes.
            </p>
          </div>
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-globe text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Global Reach
              </h3>
            </div>
            <p className="text-gray-700">
              Connecting with partners and communities across continents to
              drive positive global change.
            </p>
          </div>
        </MotionDiv>
      </div>
    </main>
  );
}
