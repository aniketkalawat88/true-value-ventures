import React from 'react';

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
    <section className="my-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">OUR SERVICES</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  alt={service.title}
                  className="w-full h-56 object-cover"
                  src={service.imgSrc}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
