import { MotionDiv } from '@/app/(root)/utils/motion-div'
import React from 'react'

export default function MissionVision() {
    const variants = {
        start: { x: 100, opacity: 0 },
        end: { x: 0, opacity: 1 },
        startUp: { y: 100, opacity: 0 },
        endUp: { y: 0, opacity: 1 },
      };
  return (
   
    <MotionDiv variants={variants} initial={variants.startUp} whileInView={variants.endUp} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }} className=' max-w-7xl mx-auto overflow-hidden'>
    <div className="md:mb-10 mb-5 px-6 md:px-0 text-[#0F1416] text-center">
      <h2 className="text-primary-main lg:text-[2.5rem] md:text-3xl text-2xl font-medium">
        Mission & Vision
      </h2>
      <p className="md:text-lg sm:text-base text-base mt-4 text-justify">
        Our mission is to produce and continually provide quality products at a competitive price while fostering a climate where environmental technologies can thrive. We will always strive to service our customer with the utmost integrity, and to their complete satisfaction.
      </p>
      <p className="md:text-lg sm:text-base text-base text-justify mt-4">
        It is our goal to ensure our mission by continuous self-improvement, growth in our operations and employees; while maintaining profitability to the benefit of our customers, employees, and community. All employees will work together in combining their efforts and skills to ensure our mission and goals are fulfilled in a courteous manner.
      </p>

      
      {/* <h3 className="text-primary-main lg:text-[2rem] md:text-xl text-xl font-medium mt-10">
        Certifications
      </h3>
      <ul className="list-none mt-4">
        <li className="md:text-lg sm:text-base text-xs mt-2">
          <strong>IEC</strong>
        </li>
        <li className="md:text-lg sm:text-base text-xs mt-2">
          <strong>MSME</strong>
        </li>
        <li className="md:text-lg sm:text-base text-xs mt-2">
          <strong>GST</strong>
        </li>
      </ul> */}
    </div>
  </MotionDiv>
  )
}
