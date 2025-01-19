import React from "react";
import { MotionDiv, MotionSection } from "../utils/motion-div";

const HeroSection = () => {
  const arr = [
    {
      img: "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?t=st=1736936261~exp=1736939861~hmac=eb99b1bb925f7c5d094e6ba11ef21c9030d4e19abe581b2d3b841736df80a8fc&w=996",
      val1: "Seamless Global Trade",
      val2: "Your reliable export-import partner.",
      detail:
        "Streamline your international trade with our expert services in cargo handling, customs clearance, and end-to-end logistics solutions.",
    },
    {
      img: "https://images.unsplash.com/photo-1700716465891-9e5e9f501d7d?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      val1: "Expanding Horizons",
      val2: "Connect with markets worldwide.",
      detail:
        "We enable businesses to access global opportunities with efficient export-import solutions tailored to meet your unique needs.",
    },
    {
      img: "https://images.unsplash.com/photo-1719721584783-c35e4f4c66de?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      val1: "Efficient Logistics",
      val2: "Delivering excellence on every route.",
      detail:
        "Experience fast and secure transport of goods with our advanced logistics network, ensuring timely and cost-effective deliveries.",
    },
    {
      img: "https://images.unsplash.com/photo-1607653549460-bd93b4cd3072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      val1: "Trusted by Businesses",
      val2: "Building partnerships that last.",
      detail:
        "With a focus on quality and customer satisfaction, we serve as a dependable partner for businesses of all sizes in the global trade arena.",
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
    <div className="relative">
      <video
        className="custom-video max-md:h-[500px]"
        loop
        playsInline
        muted
        autoPlay
      >
        <source src="/video1.mp4" type="video/mp4" />
        <track
          src="/video1.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="h-full w-full bg-primary-main/30 absolute top-0" />
      <MotionSection variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center justify-center h-full absolute w-full top-0 px-4">
        <div className="max-md:text-center text-white max-w-7xl mx-auto ">
          <MotionDiv variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.4, delay: 0.9 }} className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-3xl font-bold xl:leading-tight md:mb-10 sm:mb-6 drop-shadow-[0px_4px_4px_#666666] max-md:w-full">
            Seamless Global Trade
            <span className="md:text-heading-main drop-shadow-[0px_4px_4px_#C6A669]"></span>
            <span className="block">Your reliable export-import partner.</span>
          </MotionDiv>
          <p className="md:text-2xl sm:text-xl text-xl font-medium md:mb-8 drop-shadow-[0px_4px_4px_#666666] max-md:mt-5">
            {`Streamline your international trade operations with our expert export-import services. From cargo handling to customs clearance, we ensure seamless global logistics tailored to your business.`}
          </p>
        </div>
      </MotionSection>
    </div>

    // <Swiper
    //   spaceBetween={30}
    //   centeredSlides={true}
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   // navigation={true}
    //   modules={[Autoplay, Pagination, Navigation]}
    //   className="mySwiper relative text-white overflow-hidden lg:h-[40vw] md:h-[40vw] sm:h-[50vw] h-[95vh]"
    // >
    //   {
    //     arr.map((ele, i) => (
    //       <SwiperSlide key={i} className="h-full w-full">
    //         <div className="absolute inset-0">
    //           <img
    //             src={ele.img}
    //             alt="Background Image"
    //             className="object-cover object-center w-full h-full"
    //           />
    //           <div className="absolute inset-0 bg-primary-main opacity-30" />
    //         </div>
    //         <div className="relative z-10 flex flex-col justify-center items-start h-full text-start max-w-5xl mx-auto md:p-0 sm:p-4 p-4 max-sm:text-center">
    //           <div
    //             className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-2xl font-bold xl:leading-tight md:mb-10 sm:mb-6 drop-shadow-[0px_4px_4px_#666666] max-md:w-full"
    //           >
    //             {ele.val1}
    //             <span className="md:text-heading-main drop-shadow-[0px_4px_4px_#C6A669]"></span>
    //             <span className="block">{ele.val2}</span>
    //           </div>
    //           <p
    //             className="md:text-2xl sm:text-xl text-base font-medium md:mb-8 drop-shadow-[0px_4px_4px_#666666] max-md:mt-5"
    //           >
    //             {ele.detail}
    //           </p>
    //           <div className="md:hidden flex justify-center w-full mt-10">
    //             <button
    //               className="text-white bg-primary-main md:py-2 md:px-6 px-4 py-2 rounded lg:text-lg sm:text-base text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
    //             >
    //               Get Free Consultation!
    //             </button>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))
    //   }
    // </Swiper>
  );
};

export default HeroSection;
