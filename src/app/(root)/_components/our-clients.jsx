import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function OurClients() {
  const variants = {
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };
  const logo = [
    "https://w7.pngwing.com/pngs/185/494/png-transparent-international-trade-business-plan-company-foreign-text-service-people.png",
    "https://static.vecteezy.com/system/resources/previews/010/596/904/non_2x/world-with-arrow-logo-global-target-logo-concept-world-market-analytic-goal-and-trades-logos-vector.jpg",
    "https://w7.pngwing.com/pngs/956/338/png-transparent-foreign-exchange-market-trader-binary-option-investing-online-trade-globe-logo-world.png",
    "https://img.freepik.com/premium-vector/export-import-golobal-logo-design-template-illustration_884294-100.jpg?semt=ais_hybrid",
    "https://t4.ftcdn.net/jpg/01/27/04/75/360_F_127047561_fPMvGPQt0IQVlWw5e4P8lsg8EJZ9xhhS.jpg",
  ];
  return (
    <div className="client-logos bg-gray-50 my-10 py-6">
      <div className="container max-w-7xl mx-auto px-6 overflow-hidden">
        <h2 className="text-3xl font-bold text-primary-main text-center mb-8">
          Trusted By Leading Brands
        </h2>
        <MotionDiv variants={variants}
          initial={variants.start}
          whileInView={variants.end}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once : true}} 
          className="flex justify-center items-center gap-8 flex-wrap">
          {logo.map((logo) => (
            <img
              key={logo}
              src={logo}
              alt={`Client Logo ${logo}`}
              className="h-20 opacity-80 hover:opacity-100 transition-all"
            />
          ))}
        </MotionDiv>
      </div>
    </div>
  );
}
