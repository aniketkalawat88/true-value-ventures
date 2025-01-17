import React from 'react'

export default function AboutUs2() {
  return (
    <>
    
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  rel="stylesheet"/>
        <link  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"  rel="stylesheet"/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:px-0 px-6 md:my-10 my-6 gap-8">
        <div className="pr-0 md:pr-10">
          <h2 className="text-secondary-main text-lg md:text-xl font-semibold text-center md:text-left">
            Why Choose Global Export & Import Trading Company?
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-main mt-4 text-center md:text-left">
            Your Trusted Partner in Global Trade
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            {`At Global Export & Import Trading Company, we don't just move goods—we build connections, streamline processes, and deliver excellence. Here's why businesses worldwide trust us:`}
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-6 space-y-2">
            <li>
              <strong>Comprehensive Supply Chain Solutions:</strong> From sourcing to delivery, we provide end-to-end logistics tailored to your unique needs.
            </li>
            <li>
              <strong>Global Expertise:</strong> Our extensive network ensures smooth operations across international borders, minimizing delays and maximizing efficiency.
            </li>
            <li>
              <strong>Competitive Pricing:</strong> We combine top-notch service with cost-effective solutions to enhance your bottom line.
            </li>
            <li>
              <strong>Reliable Partnerships:</strong> With a commitment to transparency and trust, we build lasting relationships that drive mutual growth.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-box text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Comprehensive Supply Chain
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-globe text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Global Expertise
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-dollar-sign text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Competitive Pricing
            </h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-primary-main/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-secondary-main text-2xl" />
            </div>
            <h3 className="text-primary-main text-xl font-semibold">
              Reliable Partnerships
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
