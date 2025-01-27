import React from "react";

export default function OwnerInfo() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-4 items-center">
        {/* Image Section */}
        <div className="col-span-1 flex justify-center">
          <img
            src="/owner.png" // Replace with the actual image path
            alt="Mr. Rahul Singh"
            className="rounded-lg shadow-lg md:w-full md:h-auto w-64 h-64 object-cover"
          />
        </div>
        {/* Information Section */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg md:p-8 p-4">
          <h2 className="text-3xl font-bold text-primary-main mb-6 text-center md:text-left">
            Our Founder
          </h2>
          <h3 className="text-2xl font-semibold text-secondary-main mb-4">
            Mr. Rahul Singh
          </h3>
          <p className="text-gray-700 mb-4 max-md:text-justify">
            Mr. Rahul Singh is the Founder Proprietor of “True Value Ventures,”
            a company established in 2021 with the mission of simplifying
            international trade and becoming a reliable global partner for
            importers and exporters worldwide.
          </p>
          <p className="text-gray-700 mb-4 max-md:text-justify">
            Rahul Singh holds a Master’s in Business Administration and a
            certification in Digital Marketing from MICA, Ahmedabad. He also
            serves as the Managing Partner of True Value Bio Energy, one of the
            largest manufacturers of biomass pellets and briquettes in Central
            India.
          </p>
          <p className="text-gray-700 mb-4 max-md:text-justify">
            With a distinguished career in media, Rahul has worked with
            renowned brands such as The Times of India, The Economic Times, The
            Indian Express, and Dainik Bhaskar. His diverse expertise spans
            sustainable energy and media industries, showcasing his leadership
            and innovative approach across sectors.
          </p>
          <p className="text-gray-700 max-md:text-justify">
            Beyond his professional achievements, Rahul is a passionate
            traveler who enjoys exploring new cultures and places. His hobbies
            include studying world maps and delving into the nuances of culture
            and human behavior across nations.
          </p>
        </div>
      </div>
    </section>
  );
}
