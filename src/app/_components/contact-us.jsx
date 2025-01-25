"use client"

import React, { useState } from 'react';
import { MotionDiv } from '../utils/motion-div';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    whatsappNumber: '',
    product: '',
    incoterm: '',
    port: '',
    requirement: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <section id='contact' className="relative my-10 bg-primary-main text-white md:px-0 px-6">
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
        transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
        className="max-w-7xl mx-auto md:py-10 py-6 relative z-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase">Enquiry Now</h2>
          <p className="md:mt-4 mt-2">We always use best &amp; fastest fleets</p>
        </div>
        <form
          className="md:mt-8 mt-4 max-w-5xl mx-auto bg-white md:p-8 p-4 rounded-lg shadow-md text-black"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3 md:text-base text-sm">
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300"
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300"
              placeholder="Country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300"
              placeholder="WhatsApp Number"
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300"
              placeholder="Product"
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300"
              placeholder="Incoterm"
              type="text"
              name="incoterm"
              value={formData.incoterm}
              onChange={handleChange}
            />
            <input
              className="md:py-2 py-1 px-4 rounded-lg border border-gray-300 md:col-span-2"
              placeholder="Port"
              type="text"
              name="port"
              value={formData.port}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="mt-4 md:py-2 py-1 px-4 rounded-lg border border-gray-300 w-full resize-none md:h-28 h-16"
            placeholder="Detailed Requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 py-2 px-6 bg-primary-main hover:bg-primary-main rounded-md text-white"
          >
            Submit
          </button>
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