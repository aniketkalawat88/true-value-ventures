import React from 'react';
import HeroSection2 from '../_components/hero-section2';
import Service from '../_components/service';

export default function Services() {
  const logo = [
    "https://w7.pngwing.com/pngs/185/494/png-transparent-international-trade-business-plan-company-foreign-text-service-people.png",
    "https://static.vecteezy.com/system/resources/previews/010/596/904/non_2x/world-with-arrow-logo-global-target-logo-concept-world-market-analytic-goal-and-trades-logos-vector.jpg",
    "https://w7.pngwing.com/pngs/956/338/png-transparent-foreign-exchange-market-trader-binary-option-investing-online-trade-globe-logo-world.png",
    "https://img.freepik.com/premium-vector/export-import-golobal-logo-design-template-illustration_884294-100.jpg?semt=ais_hybrid",
    "https://t4.ftcdn.net/jpg/01/27/04/75/360_F_127047561_fPMvGPQt0IQVlWw5e4P8lsg8EJZ9xhhS.jpg"
  ]
  return (
    <div>
          <HeroSection2 name={'Global Export & Import Solutions'} img={'https://media.licdn.com/dms/image/v2/D4E12AQEciG6Nxvmvhg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702509848175?e=2147483647&v=beta&t=hkPjxyM_x6vVQxwVDTmWBfwgWg4G8zvIG3GvChb4yZk'} />
<Service />
      <div className="services-page bg-gray-100">
        <div className="hero-section bg-primary-main text-white py-20 text-center">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">Global Export & Import Solutions</h1>
          <p className="md:text-lg text-sm max-w-4xl mx-auto">
            Unlock opportunities in global trade with our end-to-end services for export, import, logistics, and consulting.
          </p>
        </div>

        {/* Services Section */}
        <div className="container max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-primary-main text-center mb-8">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                icon: 'fas fa-shipping-fast',
                title: 'Global Shipping',
                description: 'Reliable and efficient shipping services connecting international markets seamlessly.',
              },
              {
                icon: 'fas fa-warehouse',
                title: 'Storage & Packaging',
                description: 'Secure storage and expert packaging to preserve product quality.',
              },
              {
                icon: 'fas fa-leaf',
                title: 'Fresh Produce Supply',
                description: 'Premium-quality fresh fruits and vegetables sourced from trusted growers.',
              },
              {
                icon: 'fas fa-globe',
                title: 'Market Expansion',
                description: 'Strategic insights and opportunities to grow your business globally.',
              },
              {
                icon: 'fas fa-money-check',
                title: 'Competitive Pricing',
                description: 'Cost-effective solutions for all your export-import needs.',
              },
              {
                icon: 'fas fa-handshake',
                title: 'Trade Consultation',
                description: 'Expert advisory services to streamline your operations.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card bg-white p-6 shadow-md rounded-md text-center hover:shadow-lg hover:scale-105 transform transition-all"
              >
                <i className={`${service.icon} text-secondary-main text-5xl mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us bg-white py-16">
          <div className="container max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary-main mb-8">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'fas fa-star',
                  title: 'Trusted Quality',
                  description: 'We deliver only the best, certified by global quality standards.',
                },
                {
                  icon: 'fas fa-truck',
                  title: 'On-Time Delivery',
                  description: 'Ensuring your shipments arrive on time, every time.',
                },
                {
                  icon: 'fas fa-users',
                  title: 'Dedicated Support',
                  description: 'Our team is available 24/7 to assist you with your trade needs.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 shadow-sm rounded-md text-center hover:shadow-md"
                >
                  <i className={`${item.icon} text-secondary-main text-4xl mb-4`}></i>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="client-logos bg-gray-50 my-10 py-6">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary-main text-center mb-8">
              Trusted By Leading Brands
            </h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {logo.map((logo) => (
                <img
                  key={logo}
                  src={logo}
                  alt={`Client Logo ${logo}`}
                  className="h-20 opacity-80 hover:opacity-100 transition-all"
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="cta bg-primary-main text-white my-10 py-10">
          <div className="container max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Global Trade?
            </h2>
            <p className="text-lg mb-6">
              Get in touch with us today and discover how we can streamline your export-import operations.
            </p>
            <button className="bg-secondary-main text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition">
              Contact Us Now
            </button>
          </div>
        </div> */}


      </div>
    </div>
  );
}
