"use client";

import React, { useState } from "react";
import { MotionDiv } from "../utils/motion-div";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Country: "",
    Email: "",
    Number: "",
    Product: "",
    Incoterm: "",
    Port: "",
    Requirement: "",
  });

  const variants = {
    start: { x: 200, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startUp: { y: 0, scale: 0 },
    endUp: { y: 0, scale: 1 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      setLoading(true);
      const response = await fetch("https://sheetdb.io/api/v1/nk2b5gozjtzhz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([formData]), // Send as an array of objects
      });
      setLoading(false);

      if (response.ok) {
        alert("Form submitted successfully");
        // Optionally, reset form fields
        setFormData({
          Name: "",
          Email: "",
          Number: "",
          Country: "",
          Product: "",
          Incoterm: "",
          Port: "",
          Requirement: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <section
      id="contact"
      className="relative my-10 bg-primary-main text-white md:px-0 px-6"
    >
      <img
        alt="Tanker truck"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1wb3J0JTIwZXhwb3J0fGVufDB8fDB8fHww"
      />
      <MotionDiv
        variants={variants}
        initial={variants.startUp}
        whileInView={variants.endUp}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
        className="max-w-7xl mx-auto md:py-6 py-6 relative z-10"
      >
        <div className="text-center">
          <h2 className="md:text-3xl text-2xl font-bold text-white ">Enquiry Now</h2>
          <p className="md:mt-2 mt-2">
            We always use best &amp; fastest fleets
          </p>
        </div>
        <form
          className="md:mt-8 mt-4 max-w-5xl mx-auto bg-white md:p-8 p-4 rounded-lg shadow-md text-black"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3 md:text-base text-sm">
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main"
              placeholder="Name"
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main"
              placeholder="Country"
              type="text"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main"
              placeholder="Email"
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main"
              placeholder="WhatsApp Number"
              type="text"
              name="Number"
              value={formData.Number}
              onChange={handleChange}
            />
            <select
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main"
              name="Product"
              value={formData.Product}
              onChange={handleChange}
            >
              <option value="">Select Product</option>
              <option value="Rapeseed (Canola) Meal">
                Rapeseed (Canola) Meal
              </option>
              <option value="Non-GMO Soybean Meal">
              Non-GMO Soybean Meal
              </option>
              <option value="Rapeseed (Canola) Oil">
                Rapeseed (Canola) Oil
              </option>
              <option value="Dehydrated Onion Flakes">
                Dehydrated Onion Flakes
              </option>
              <option value="Dehydrated Onion Granules">
                Dehydrated Onion Granules
              </option>
              <option value="Dehydrated Onion Powder">
                Dehydrated Onion Powder
              </option>
              <option value="Dehydrated Garlic Flakes">
                Dehydrated Garlic Flakes
              </option>
              <option value="Dehydrated Garlic Granules">
                Dehydrated Garlic Granules
              </option>
              <option value="Dehydrated Garlic Powder">
                Dehydrated Garlic Powder
              </option>
              <option value="Biomass Pellets & Briquettes">
                Biomass Pellets & Briquettes
              </option>
              <option value="Indian Organic Millets">
              Indian Organic Millets
              </option>
              <option value="Indian Handicrafts">
              Indian Handicrafts
              </option>
              <option value="Other">
              Other
              </option>
            </select>

            <select
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main"
              name="Incoterm"
              value={formData.Incoterm}
              onChange={handleChange}
            >
              <option value="">Select Incoterm</option>
              <option value="EXW">EXW</option>
              <option value="FCA">FCA</option>
              <option value="FAS">FAS</option>
              <option value="FOB">FOB</option>
              <option value="CFR">CFR</option>
              <option value="CIF">
                CIF
              </option>
              <option value="CPT">CPT </option>
              <option value="CIP">
                CIP
              </option>
              <option value="DAP">DAP </option>
              <option value="DPU">
                DPU 
              </option>
              <option value="DDP">DDP </option>
            </select>

            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-primary-main md:col-span-2"
              placeholder="Destination Port"
              type="text"
              name="Port"
              value={formData.Port}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="mt-4 md:py-2 py-1 px-4 rounded-lg border border-primary-main w-full resize-none md:h-28 h-16"
            placeholder="Detailed Requirement"
            name="Requirement"
            value={formData.Requirement}
            onChange={handleChange}
          />
          <div className="w-full flex">
            <button
              type="submit"
              className="mt-4 py-2 bg-primary-main hover:bg-primary-main rounded-md text-white mx-auto w-56"
            >
              {loading ? "Enquire..." : "Enquire Now"}
            </button>

          </div>
        </form>
      </MotionDiv>
    </section>
  );
}

// {/* <div className="relative">
// <video className="custom-video max-md:h-[300px]" loop playsInline muted autoPlay>
//   <source src="/video1.mp4" type="video/mp4" />
//   <track
//     src="/video1.mp4"
//     kind="subtitles"
//     srcLang="en"
//     label="English"
//   />
//   Your browser does not support the video tag.
// </video>

//     <div className="h-full w-full bg-primary-main/30 absolute top-0" />
//   <div className="flex items-center justify-center h-full absolute w-full top-0 px-4">
//     <div className="text-center text-white max-w-3xl mx-auto ">
//     <p
//               className={`text-xs sm:text-base tracking-widest max-md:mt-10 md:mb-4 max-md:mb-2`}
//             >
//               Pachmarhi ke Maze, Bas Tumhare Liye
//             </p>
//             <h1 className="xl:text-[3rem] lg:text-5xl max-md:text-xl sm:text-2xl text-base font-bold text-primary-main uppercase">
//             Discover the Magic of
//             </h1>
//             <h2
//               className={`xl:text-[5rem] lg:text-5xl max-md:text-4xl sm:text-2xl text-base font-bold md:mb-4  uppercase `}
//             >
//               {`Pachmarhi`}
//             </h2>
//       <p className="md:text-sm sm:text-sm mb-6 max-w-2xl mx-auto max-md:mt-4 max-md:hidden">
//        {`    Suhana Tours and Travels offers personalized tours in Pachmarhi, showcasing its stunning nature, rich culture, and hidden gems for unforgettable adventures.`}
//       </p>
//         <button className="bg-primary-main text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm text-sm hover:bg-primary-main transition duration-300 font-medium"
//       >
//         Explore Now
//       </button>
//     </div>
//   </div>
// </div>  */}
