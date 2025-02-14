"use client"

import React from "react";
import { MotionDiv, MotionSection } from "../utils/motion-div";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  const arr = [
    {
      img: "https://media.licdn.com/dms/image/D4D12AQGPTk5hlAvflg/article-cover_image-shrink_600_2000/0/1695621316038?e=2147483647&v=beta&t=xCUBRft3Xa5qrfKF380VnV3kaR37Crr8J81aHHhAl3c",
      val1: "Seamless Global Trade",
      val2: "Your reliable export-import partner.",
      detail:
      "Streamline your international trade with our expert services in cargo handling, customs clearance, and end-to-end logistics solutions.",
    },
    {
      img: "https://scw-mag.com/wp-content/uploads/sites/7/2024/02/exportation-image-800x445.jpeg",
      val1: "Expanding Horizons",
      val2: "Connect with markets worldwide.",
      detail:
      "We enable businesses to access global opportunities with efficient export-import solutions tailored to meet your unique needs.",
    },
    {
      img: "https://indoconnectsingapore.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-11.48.47-AM-1024x585.jpeg",
      val1: "Efficient Logistics",
      val2: "Delivering excellence on every route.",
      detail:
        "Experience fast and secure transport of goods with our advanced logistics network, ensuring timely and cost-effective deliveries.",
    },
    {
      img: "https://asalawpractice.org/wp-content/uploads/2023/11/63ce58f1d2b91354aea3a397_transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration.jpg",
      val1: "Trusted by Businesses",
      val2: "Building partnerships that last.",
      detail:
        "With a focus on quality and customer satisfaction, we serve as a dependable partner for businesses of all sizes in the global trade arena.",
    },
    {
      img: "https://www.umaexports.net/images/pulses.jpg",
      val1: "Trade for Produts",
      val2: "Delivering Quality Products Worldwide.",
      detail:
        "We specialize in the export and import of premium agricultural commodities, food grains, pulses, spices, and other essential goods, ensuring quality and timely delivery across global markets",
    },
  ];

  const variants = {
    start: { x: 200, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startUp: { y: 200, opacity: 0 },
    endUp: { y: 0, opacity: 1 },
  }

  const aboutVariants = {
    hiddenBottom: {
      y: 100,
      opacity: 0,
    },
    visibleBottom: {
      y: 0,
      opacity: 1,
      staggerChildren: 0.3,
      transition: {
        delay: 0.3,
        duration: 0.4,
      }
    },
    hiddenRight: {
      x: 200,
      opacity: 0,
    },
    visibleRight: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    // <div className="relative">
    //   <video
    //     className="custom-video max-md:h-[500px]"
    //     loop
    //     playsInline
    //     muted
    //     autoPlay
    //   >
    //     <source src="/video1.mp4" type="video/mp4" />
    //     <track
    //       src="/video1.mp4"
    //       kind="subtitles"
    //       srcLang="en"
    //       label="English"
    //     />
    //     Your browser does not support the video tag.
    //   </video>

    //   <div className="h-full w-full bg-primary-main/30 absolute top-0" />
    //   <MotionSection variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center justify-center h-full absolute w-full top-0 px-4">
    //     <div className="text-center text-white max-w-7xl mx-auto ">
    //       <MotionDiv variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.4, delay: 0.9 }} className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-3xl font-bold xl:leading-tight md:mb-10 sm:mb-6 drop-shadow-[0px_4px_4px_#666666] max-md:w-full">
    //         Seamless Global Trade
    //         <span className="md:text-heading-main drop-shadow-[0px_4px_4px_#C6A669]"></span>
    //         <span className="block">Your reliable export-import partner.</span>
    //       </MotionDiv>
    //       {/* <p className="md:text-2xl sm:text-xl text-xl font-medium md:mb-8  drop-shadow-[0px_4px_4px_#666666] max-md:mt-5">
    //         {`Unlock the full potential of your international trade operations with our comprehensive export-import services. We ensure your goods move smoothly and efficiently across borders, helping your business thrive in the global marketplace.`}
    //       </p> */}
    //     </div>
    //   </MotionSection>
    // </div>
<Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}  
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative text-white overflow-hidden lg:h-[30vw] md:h-[30vw] sm:h-[50vw] h-[60vh]"
    >
      {
        arr.map((ele, i) => (
          <SwiperSlide key={i} className="h-full w-full">
            <div className="absolute inset-0">
              <img
                src={ele.img}
                alt="Background Image"
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-0 bg-primary-main opacity-10" />
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center w-full md:p-0 sm:p-4 p-4 max-sm:text-center">
              <div className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-3xl font-bold xl:leading-tight md:mb-10 sm:mb-6 drop-shadow-[0px_4px_4px_#666666] max-md:w-full">
                {ele.val1}
                <span className="md:text-heading-main drop-shadow-[0px_4px_4px_#C6A669]"></span>
                <span className="block">{ele.val2}</span>
              </div>
              {/* <p className="md:text-2xl sm:text-xl text-base font-medium md:mb-8 drop-shadow-[0px_4px_4px_#666666] max-md:mt-5">
                {ele.detail}
              </p> */}
              {/* <div className="md:hidden flex justify-center w-full mt-10">
                <button className="text-white bg-primary-main md:py-2 md:px-6 px-4 py-2 rounded lg:text-lg sm:text-base text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                  Get Free Consultation!
                </button>
              </div> */}
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default HeroSection;
