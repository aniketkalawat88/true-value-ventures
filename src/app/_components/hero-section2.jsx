import React from "react";
import { MotionH1 } from "../utils/motion-div";

export default function HeroSection2({ name, img }) {
  const variants = {
    start: { y: 100, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  return (
    <section className="relative text-center">
      <img
        alt="no image"
        className="w-full h-96 object-cover"
        height={400}
        src={img}
        width={1920}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <MotionH1
          variants={variants}
          initial={variants.start}
          animate={variants.end}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl text-white font-bold  px-2"
        >
          {name}
        </MotionH1>
      </div>
    </section>
  );
}
