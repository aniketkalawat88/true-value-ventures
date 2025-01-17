"use client"

import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUS() {
  const [isLoading, setIsLoading] = useState(false);
     const [formData, setFormData] = useState({
        description: "",
        number: "",
        fruit: "",
      });
    
      const handleChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_URL}/enquiry`,
            formData
          );
          console.log("Submission successful:", res);
          toast.success("Form submitted successfully!");
          setFormData({
            description: "",
            number: "",
            fruit: "",
          });
        } catch (error) {
          console.error("Error during form submission:", error);
          toast.error("Failed to submit the form. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <section className=" my-10"  id='form-data'>
    <div className="max-w-7xl mx-auto md:px-0 px-4">
     <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-secondary-main font-medium mb-2"
            htmlFor="business-description"
          >
            Fresh Grocery Market Factory Importer
          </label>
          <input
            className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="business-description"
            placeholder="Enter your business description here"
            type="text"
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary-main font-medium mb-2"
            htmlFor="phone-number"
          >
            Phone number*
          </label>
          <input
            className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone-number"
            placeholder="Your phone number"
            type="text"
            value={formData.number}
            name='number'
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary-main font-medium mb-2"
            htmlFor="fruits-import"
          >
            Fresh Fruits Importer to Iraq?
          </label>
          <textarea
            className="shadow appearance-none border rounded-xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fruits-import"
            placeholder="Enter the fruits you import"
            value={formData.fruit}
            name='fruit'
            onChange={handleChange}
            required
          />
        </div>
        <button
              className="bg-primary-main/80 hover:bg-primary-main/90 text-secondary-main font-bold py-2 px-4 rounded w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Form Data Here"}
            </button>
      </form>
      <ToastContainer />
    </div>
  </section>
  )
}
