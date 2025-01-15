import React from 'react'

export default function WhyChoose() {
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">WHY CHOOSE US?</h2>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="w-full md:w-1/2 p-4">
          <img
            alt="Handshake"
            className="w-full h-48 object-cover"
            src="https://placehold.co/400x300"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <ul className="text-left space-y-4">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-primary-main mr-2"></i>
              <span>
                We provide highly reliable and cost-effective transportation
                services.
              </span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-primary-main mr-2"></i>
              <span>We have a team of experienced professionals.</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-primary-main mr-2"></i>
              <span>We ensure timely delivery of goods.</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-primary-main mr-2"></i>
              <span>We offer competitive pricing.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
