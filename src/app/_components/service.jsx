import React from 'react';
import { aboutVariants, MotionDiv } from '../utils/motion-div';

export default function Service() {
  // Array of services
  const services = [
    {
      title: 'ISO Tanks Services',
      description: 'We provide the best liquid logistics services for ISO tanks.',
      imgSrc: 'https://img.freepik.com/free-photo/boat-loading-river_181624-16773.jpg?t=st=1736936390~exp=1736939990~hmac=ada4f84e8f7379060e8dfdd8563a3c52dbbcd2259be7922b7fbac5959c15e260&w=996',
      link: '#',
    },
    {
      title: 'Ocean Freight Shipping',
      description: 'We provide the best ocean freight shipping services.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmdsdh5qPOIDwaVjwIVtGq_XrNie3W8737A&s',
      link: '#',
    },
    {
      title: 'Transportation & Customs Clearance',
      description: 'We provide the best transportation and customs clearance services.',
      imgSrc: 'https://aptlogistics.com/wp-content/uploads/bfi_thumb/17.10-2-ox1puxe7jl5xek25xbmpcxb0em0gw9m96f2zjyb8vc.jpg',
      link: '#',
    },
  ];

  return (
    <section className="md:my-10 my-6 bg-white">
      <div className="max-w-7xl mx-auto text-center overflow-hidden">
        <h2 className="md:text-3xl text-2xl font-bold text-primary-main">OUR SERVICES</h2>
        <div className="flex flex-wrap justify-center md:mt-8">
          {services.map((service, index) => (
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4*index }} key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm shadow-primary-main/50">
                <img
                  alt={service.title}
                  className="w-full h-56 object-cover"
                  src={service.imgSrc}
                />
                <div className="md:p-4 p-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                
                </div>
              <div className='grid grid-cols-2 border border-primary-main rounded-b-lg mf:text-base text-sm'>
                <button className='bg-primary-main text-white  p-2'>Call Now</button>
                <button className='text-primary-main  p-2'>Enquiry Now</button>
              </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
