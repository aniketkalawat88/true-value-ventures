import React from 'react'
import { MotionDiv } from '../utils/motion-div'
import { delay } from 'framer-motion'

export default function Statics() {
  const variants = {
    start: {
      x: 200,
      opacity: 0,      
    },
    end: {
      x: 0,
      opacity: 1
    },
    time: {
      duration: 0.4,
      delay: 0.4,
      type: "spring"
    },
    view: {
      once: true,
    },
    leftStart: {
      x: -200,
      opacity: 0
    },
  }
  return (
    <section className="py-16 bg-primary-main/30 text-white">
      <div className="max-w-7xl mx-auto text-center overflow-hidden">
        <div className="flex flex-wrap justify-center">
          <MotionDiv variants={variants} initial={variants.leftStart} whileInView={variants.end} viewport={variants.view} transition={variants.time} className="w-full md:w-1/4 p-4">
            <div className="bg-primary-main p-6 rounded-lg">
              <h3 className="text-3xl font-bold">120</h3>
              <p className="mt-2">Projects Completed</p>
            </div>
          </MotionDiv>
          <MotionDiv variants={variants} initial={variants.leftStart} whileInView={variants.end} viewport={variants.view} transition={variants.time} className="w-full md:w-1/4 p-4">
            <div className="bg-primary-main p-6 rounded-lg">
              <h3 className="text-3xl font-bold">75</h3>
              <p className="mt-2">Active Clients</p>
            </div>
          </MotionDiv>
          <MotionDiv variants={variants} initial={variants.start} whileInView={variants.end} viewport={variants.view} transition={variants.time} className="w-full md:w-1/4 p-4">
            <div className="bg-primary-main p-6 rounded-lg">
              <h3 className="text-3xl font-bold">50</h3>
              <p className="mt-2">Fleet of Vehicles</p>
            </div>
          </MotionDiv>
          <MotionDiv variants={variants} initial={variants.start} whileInView={variants.end} viewport={variants.view} transition={variants.time} className="w-full md:w-1/4 p-4">
            <div className="bg-primary-main p-6 rounded-lg">
              <h3 className="text-3xl font-bold">25</h3>
              <p className="mt-2">Support Team Members</p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
