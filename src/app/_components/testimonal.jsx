"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Testimonal() {
  const testimonials = [
    {
      name: "Jonathan Edwards",
      location: "United Kingdom",
      data: "Trading has redefined the standards for global fresh produce exports. Their seamless logistics and consistent quality make them a preferred partner in the competitive international market.",
    },
    {
      name: "Sofia Martinez",
      location: "Spain",
      data: "The professionalism and reliability of Trading are unmatched. Their commitment to timely deliveries and premium produce ensures our import operations run smoothly every time.",
    },
    {
      name: "Arjun Mehta",
      location: "India",
      data: "Their expertise in export-import trade is evident in every transaction. From documentation to delivery, Trading ensures a hassle-free experience, allowing us to focus on our business growth.",
    },
    {
      name: "Fatima Hassan",
      location: "UAE",
      data: "Trading is a trusted name in global trade. Their ability to navigate international regulations and deliver on promises sets them apart in the fresh produce export industry.",
    },
    {
      name: "Luigi Ricci",
      location: "Italy",
      data: "As an importer, we value consistency and quality. Trading delivers both, making them an integral part of our supply chain. Their attention to global standards is commendable.",
    },
    {
      name: "Chen Wei",
      location: "China",
      data: "From sourcing to shipping, Trading showcases exceptional expertise in global trade. Their produce meets international standards, and their logistics are always reliable.",
    },
    {
      name: "Ahmed Al Maktoum",
      location: "Dubai",
      data: "Trading bridges the gap between farmers and international markets effortlessly. Their dedication to sustainable trade practices and customer satisfaction is truly inspiring.",
    },
  ];
  
  return (
    <div
      id="review"
      className="relative w-full h-full max-w-7xl mx-auto md:py-10 rounded-md max-md:mb-6  md:px-0 px-4"
    >
      <div className="grid md:grid-cols-7 grid-cols-1 w-full h-full ">
        <div className=" max-w-xl md:col-span-3 md:pr-2">
          <h1
            className={`md:text-5xl sm:text-2xl text-xl font-bold md:tracking-tight text-secondary-main  max-md:text-center`}
          >
            What Our Clients Are Saying
            
          </h1>
          <p className="text-secondary-main font-medium md:mt-4 mt-2  max-md:text-xl text-2xl max-md:text-center max-md:leading-snug">
          Hear from our satisfied partners about the quality, reliability and service that set us apart.
          </p>
          <p className="md:text-lg text-sm  text-secondary-main md:mt-4 mt-2">Vegetables & Fruits Trading Company is highly regarded by our clients for delivering the freshest fruits and vegetables, paired with exceptional quality and reliable service. Our steadfast commitment to customer satisfaction has fostered lasting relationships and earned us trust worldwide.      </p>

          
        </div>
        <Swiper
          autoPlay={true}
          loop={true}
          spaceBetween={40}
          navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full max-md:mt-4 rounded-xl md:col-span-4 pl-4"
        >
          {testimonials?.map((ele, i) => (
            <SwiperSlide
              key={i}
              className="md:px-6 grid items-center h-full w-full"
            >
              <div className="md:h-24 md:w-24 h-12 w-12 relative">
                <Image
                  src={`/01.png`}
                  alt="No Preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-[#666] md:text-xl text-sm mt-4">
                {ele.data}
              </p>
              <p className="md:text-2xl text-base text-secondary-main font-bold  mt-2">
                {ele.name}
              </p>
              <p className="text-lg font-medium text-[#666666]">
                {ele.location}
              </p>
            </SwiperSlide>
          ))}
          
        <div className="relative mt-4 max-md:pb-4">
            <button className="HomeSlidePrev text-primaryMain absolute md:bottom-0 bottom-5 max-md:left-1/3 left-6 -translate-y-1/2 z-10 hover:bg-secondary-main hover:text-white md:text-2xl p-2 rounded border bg-secondary-main/10 text-secondary-main">
              <FaArrowLeft />
            </button>
            <button className="HomeSlideNext text-primaryMain absolute md:bottom-0 bottom-5 max-md:left-1/2 -translate-y-1/2 md:left-24 left-20 z-10 hover:bg-secondary-main hover:text-white md:text-2xl p-2 rounded border bg-secondary-main/10 text-secondary-main">
              <FaArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}