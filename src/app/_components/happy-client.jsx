import React from 'react';
import { MotionSection } from '../utils/motion-div';

export default function HappyClient() {
  const variants = {
    start: { y: 100, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  return (
    <MotionSection
      variants={variants}
      initial={variants.start}
      whileInView={variants.end}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-primary-main text-white py-12 mt-10"
    >
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-6">
        <div className="text-center mb-6 md:mb-0">
          <span className="text-4xl font-bold">15,000+</span>
          <p>Happy Customers Worldwide</p>
        </div>
        <div className="text-center mb-6 md:mb-0">
          <span className="text-4xl font-bold">70+</span>
          <p>Countries Served</p>
        </div>
        <div className="text-center mb-6 md:mb-0">
          <span className="text-4xl font-bold">500+</span>
          <p>Successful Projects Delivered</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold">98%</span>
          <p>Client Retention Rate</p>
        </div>
      </div>
    </MotionSection>
  );
}
