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
      name: "Liam O'Connor",
      location: "Ireland",
      data: "Outstanding quality and service. Khoshnaw Vegetables & Fruits Trading Company ensures every product is fresh and delivered on time. Truly impressed by their professionalism! Highly recommend!",
    },
    {
      name: "Amara Patel",
      location: "India",
      data: "Exceptional produce and reliable delivery. Their attention to detail and commitment to freshness make them stand out. A top-notch company!",
    },
    {
      name: "Carlos Hernández",
      location: "Spain",
      data: "Impeccable service and superior quality. Fresh fruits and vegetables every time, delivered with a smile. Khoshnaw Trading never disappoints!",
    },
    {
      name: "Hassan Ali",
      location: "UAE",
      data: "Fresh produce and outstanding customer service. Khoshnaw Trading makes it easy to get the best quality fruits and vegetables every time. Highly recommended!",
    },
    {
      name: "Luca Rossi",
      location: "Italy",
      data: "Incredible quality and seamless service. Every order has been fresh, perfectly packed, and delivered promptly. Highly impressed!",
    },
    {
      name: "Fatima Al Zarooni",
      location: "Dubai",
      data: "Unparalleled service and quality produce. Khoshnaw Trading has become our trusted supplier for fresh fruits and vegetables. Their professionalism and timely delivery are remarkable. Highly recommended!",
    },
    {
      name: "Mohammed Bin Saleh",
      location: "Dubai",
      data: "Excellent quality and exceptional service. Khoshnaw Trading ensures fresh and top-tier produce every time. Their attention to detail is commendable. A reliable choice!",
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
          <p className="md:text-lg text-sm  text-secondary-main md:mt-4 mt-2">Khoshnaw Vegetables & Fruits Trading Company is highly regarded by our clients for delivering the freshest fruits and vegetables, paired with exceptional quality and reliable service. Our steadfast commitment to customer satisfaction has fostered lasting relationships and earned us trust worldwide.      </p>

          
        </div>
        <Swiper
          AutoPlay={true}
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
              <p className="md:text-2xl text-base text-secondary-main font-bold md:mt-4 mt-2">
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