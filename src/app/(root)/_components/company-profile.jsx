import React from "react";

export default function CompanyProfile() {
  const coreValues = [
    {
      title: "Quality Assurance",
      description:
        "Committed to providing the highest quality products to meet global standards.",
    },
    {
      title: "Timely Delivery",
      description:
        "Ensures efficient and prompt delivery of goods to meet customer expectations.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Focused on building goodwill, earning repeat business, and exceeding customer satisfaction.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Company Profile Section */}
      <section className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary-main mb-6">Company Profile</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          <strong>True Value Ventures</strong> is an internationally oriented trading company based in India, 
          specializing in the export of premium Indian agricultural products directly from farm 
          partners to global markets. Established in 2021, the company has quickly gained recognition 
          for its dedication to quality, customer satisfaction, and timely delivery in the competitive 
          global trade landscape. Additionally, through its partner company, 
          <strong><u>True Value Bio Energy</u></strong>, the company is one of India’s largest manufacturers of 
          biomass pellets.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Our company has established a robust network of dedicated partners who work tirelessly, 
          around the clock, to source products directly from the regions in India where they are grown 
          or manufactured in abundance, ensuring a steady and maximum supply of high-quality products.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          <strong>"True Value Venture"</strong> is proud to partner with <strong>Vandana Arts India</strong> 
          to bring forth an exclusive collection of Indian handicraft artifacts, featuring an array of 
          traditional art forms, including Madhubani Art, Lipan Art, Warli Art, Mural Art, leather paintings 
          and art, Ceramic Arts, and other artistic creations. This collaboration enables us to provide our 
          clients with a diverse range of authentic, high-quality products that reflect the country's rich 
          cultural <strong><u>diversity</u></strong>, while supporting the preservation and promotion of traditional 
          Indian art forms.
        </p>

        {/* <h3 className="text-2xl font-semibold text-primary-main mt-8">Products</h3>
        <ul className="text-lg text-gray-700 mt-4 list-disc list-inside">
          <li>Mustard (Canola) Oil</li>
          <li>Rapeseed Meal (a key ingredient in animal feed)</li>
          <li>Dehydrated Vegetables and Fruits (such as onion flakes/powder and garlic flakes/powder)</li>
          <li>Spirulina (Blue-green algae)</li>
          <li>Millets</li>
          <li>Biomass Pallets</li>
          <li>Organic Fruits and Vegetables</li>
        </ul> */}
      </section>

      {/* About Founder Section */}
      {/* <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary-main mb-6">About Our Founder</h2>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="col-span-1">
            <img
              src="/owner.png"
              alt="Mr. Rahul Singh"
              className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="col-span-2 text-left">
            <p className="text-lg text-gray-700 mb-4">
              Mr. Rahul Singh is the Founder Proprietor of “True Value Ventures,” a company
              established in 2021 with the mission of simplifying international trade and becoming
              a reliable global partner for importers and exporters worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Rahul Singh holds a Master’s in Business Administration and a certification in Digital
              Marketing from MICA, Ahmedabad. He is also the Managing Partner of True Value Bio
              Energy, one of the largest manufacturers of biomass pellets and briquettes in Central
              India.
            </p>
            <p className="text-lg text-gray-700">
              A passionate traveler and lifelong learner, Rahul enjoys exploring new cultures and
              studying world maps, showcasing his dynamic leadership and innovative approach across
              sectors.
            </p>
          </div>
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-primary-main mb-6">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white border shadow border-primary-main rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary-main mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
