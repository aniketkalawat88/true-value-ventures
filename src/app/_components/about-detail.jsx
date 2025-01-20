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
            <span className="text-6xl text-secondary-main font-bold">10</span>
            <span className="text-xl text-gray-600">Years of Excellence</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-main mb-4">
            Redefining Global Fresh Produce Supply
          </h2>
          <p className="text-gray-700 mb-6">
            At Khonshnaw Vegetables & Fruits Trading Company, we bridge the gap
            between farms and tables across the globe. With a decade of industry
            experience, we specialize in sourcing, exporting, and delivering the
            finest fresh fruits and vegetables. Our commitment to quality,
            sustainability, and customer satisfaction drives every decision we
            make, ensuring that our clients receive unparalleled service and
            premium produce.
          </p>
          <div>
            <img
              alt="Premium Fresh Produce"
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
              <i className="fas fa-award text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Uncompromising Quality
              </h3>
            </div>
            <p className="text-gray-700">
              Our rigorous quality control ensures that every product meets the
              highest international standards.
            </p>
          </div>
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-users text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Experienced Team
              </h3>
            </div>
            <p className="text-gray-700">
              A passionate team of experts dedicated to delivering excellence in
              every transaction.
            </p>
          </div>
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-globe text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Global Presence
              </h3>
            </div>
            <p className="text-gray-700">
              With operations in over 50 countries, we ensure reliable and
              timely delivery worldwide.
            </p>
          </div>
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-leaf text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Eco-Friendly Commitment
              </h3>
            </div>
            <p className="text-gray-700">
              Promoting sustainable agriculture and eco-friendly practices for a
              healthier planet.
            </p>
          </div>
        </MotionDiv>
      </div>
    </main>
  );
}
