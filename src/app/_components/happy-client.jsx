import React from 'react'

export default function HappyClient() {
  return (
    <section className="bg-primary-main text-white py-12 mt-10">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-6">
        <div className="text-center mb-6 md:mb-0">
          <span className="text-4xl font-bold">10,000+</span>
          <p>Global Clients Served</p>
        </div>
        <div className="text-center mb-6 md:mb-0">
          <span className="text-4xl font-bold">50+</span>
          <p>Countries Covered</p>
        </div>
        <div className="text-center mb-6 md:mb-0">
          <span className="text-4xl font-bold">300+</span>
          <p>Industry Awards</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold">99%</span>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  )
}
