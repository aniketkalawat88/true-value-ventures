"use client";

import { MotionDiv } from "@/app/(root)/utils/motion-div";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

export default function ContactMap() {
  const [isVal, setIsVal] = useState({
    Name: "",
    Email: "",
    Number: "",
    Country: "",
    Product: "",
    Incoterm: "",
    Port: "",
    Requirement: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setIsVal((prevState) => ({
      ...prevState,
      [name]: value, // Update the value of the corresponding field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", isVal);

    try {
      setLoading(true);
      const response = await fetch("https://sheetdb.io/api/v1/nk2b5gozjtzhz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([isVal]), // Send as an array of objects
      });
      setLoading(false);

      if (response.ok) {
        alert("Form submitted successfully");
        // Optionally, reset form fields
        setIsVal({
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
  const variants = {
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startleft: { x: -100, opacity: 0 },
    endLeft: { x: 0, opacity: 1 },
  };

  return (
    <div className="grid m grid-cols-1 md:gap-10 sm:gap-6 gap-4 my-10 max-w-7xl mx-auto xl:px-0 px-6 overflow-hidden">
      <section>
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <MotionDiv
              variants={variants}
              initial={variants.startleft}
              whileInView={variants.endLeft}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p
                className={`text-primary-main lg:text-[2.5rem] md:text-3xl text-2xl font-medium md:my-3 my-1`}
              >
                Get in Touch
              </p>
              <p
                className={`md:text-lg sm:text-base text-xs text-[#0F1416] md:mb-10 mb-4`}
              >
                If you have any inquiries or would like further information,
                <br />
                feel free to reach us using the details below.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                    <IoCall className="text-xl" />
                  </div>
                  <div className={`ml-4 md:mb-6 mb-4`}>
                    <h3
                      className={`mb-2 md:text-2xl text-xl font-medium text-primary-main dark:text-primary-main/90`}
                    >
                      Phone
                    </h3>
                    <p className="text-heading-main md:text-base text-xs space-x-3">
                      <Link
                        href="tel:6260451165"
                        className="hover:text-secondary-main transition-transform"
                      >
                        +91 6260451165
                      </Link>
                      <Link
                        href="tel:9993185960"
                        className="hover:text-secondary-main transition-transform"
                      >
                        +91 9993185960 
                      </Link>
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                    <IoMail className="text-xl" />
                  </div>
                  <div className={`ml-4 md:mb-6 mb-4`}>
                    <h3
                      className={`mb-2 md:text-2xl text-xl font-medium text-primary-main dark:text-primary-main/90`}
                    >
                      Email Address
                    </h3>
                    <p className="text-heading-main md:text-base text-xs">
                      <Link
                        href="mailto:admin@truevalueventures.in"
                        className="hover:text-secondary-main transition-transform"
                      >
                        admin@truevalueventures.in
                      </Link>
                      <br />
                      <Link
                        href="mailto:truevalueventures@gmail.com"
                        className="hover:text-secondary-main transition-transform"
                      >
                        truevalueventures@gmail.com
                      </Link>
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                    <FaLocationDot className="text-xl" />
                  </div>
                  <div className={`ml-4 md:mb-6 mb-4`}>
                    <h3
                      className={`mb-2 md:text-2xl text-xl font-medium text-primary-main dark:text-primary-main/90`}
                    >
                      Address
                    </h3>
                    <p className="text-heading-main md:text-base text-xs">
                      Flaming-8, Aakriti Eco City, Bhopal-462039 (India)
                    </p>
                  </div>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              variants={variants}
              initial={variants.start}
              whileInView={variants.end}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="border border-primary-main rounded-xl p-4"
            >
              {/* <Headcomp name={'Contact TenOnTen Stays'} /> */}
              <form onSubmit={handleSubmit}>
                <div className=" grid md:grid-cols-2 gap-x-4">
                  <label>
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Name
                    </p>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                      name="Name"
                      value={isVal.Name}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Country
                    </p>
                    <input
                      type="text"
                      id="country"
                      placeholder="Your country"
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                      name="Country"
                      value={isVal.Country}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Email
                    </p>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                      name="Email"
                      value={isVal.Email}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <p className="text-xs font-semibold text-heading-main my-1">
                      WhatsApp Number
                    </p>
                    <input
                      type="text"
                      id="whatsappNumber"
                      placeholder="Your WhatsApp number"
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                      name="Number"
                      value={isVal.Number}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="md:col-span-2">
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Product
                    </p>
                    <select
                      id="product"
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                      name="Product"
                      value={isVal.Product}
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
                  </label>

                  <label>
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Incoterm
                    </p>
                    <select
                      id="incoterm"
                      name="Incoterm"
                      value={isVal.Incoterm}
                      onChange={handleChange}
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                    >
                      <option value="">Select Incoterm</option>
                      <option value="EXW">EXW</option>
                      <option value="FCA">FCA</option>
                      <option value="FAS">
                        FAS 
                      </option>
                      <option value="FOB">FOB</option>
                      <option value="CFR">CFR</option>
                      <option value="CIF">
                        CIF
                      </option>
                      <option value="CPT">
                        CPT
                      </option>
                      <option value="CIP">
                        CIP
                      </option>
                      <option value="DAP">
                        DAP 
                      </option>
                      <option value="DPU">
                        DPU
                      </option>
                      <option value="DDP">
                        DDP 
                      </option>
                    </select>
                  </label>

                  <label>
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Destination Port
                    </p>
                    <input
                      type="text"
                      id="port"
                      placeholder="Destination Port"
                      className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 md:text-base text-sm pl-2 pr-4"
                      name="Port"
                      value={isVal.Port}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="md:col-span-2">
                    <p className="text-xs font-semibold text-heading-main my-1">
                      Detailed Requirement
                    </p>
                    <textarea
                      placeholder="Write your detailed requirement..."
                      className="outline-none mb-2 w-full rounded-md border h-20 border-gray-400 py-2 md:text-base text-sm pl-2 pr-4 resize-none"
                      name="Requirement"
                      value={isVal.Requirement}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
                <div className="text-center">
                  <button className="w-full bg-primary-main text-white px-6 py-2 text-sm font-xl rounded-md sm:mb-0 flex justify-center items-center gap-2">
                    {loading ? "Submitting" : "Submit"}
                    {/* {isLoading && <span className="animate-spin">.</span>} */}
                  </button>
                </div>
              </form>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
