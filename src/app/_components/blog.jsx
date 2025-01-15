import React from 'react';

export default function Blog() {
  // Array of blog posts
  const blogs = [
    {
      title: 'History of ISO Tanks',
      description: 'Learn about the history and evolution of ISO tanks.',
      imgSrc: 'https://cdn.pixabay.com/photo/2021/09/30/17/54/port-6670684_1280.jpg',
      link: '#',
    },
    {
      title: 'Shipping Around the Globe',
      description: 'Discover the intricacies of global shipping around.',
      imgSrc: 'https://www.freightos.com/wp-content/uploads/2023/06/Global-shipping-lane-infographic-2-1024x536-1.jpg',
      link: '#',
    },
    {
      title: 'ISO Tank Industry',
      description: 'Explore the current trends in the ISO tank industry.',
      imgSrc: 'https://www.shutterstock.com/image-photo/container-truck-ship-port-business-260nw-2416274335.jpg',
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">LATEST BLOG POST</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {blogs.map((blog, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  src={blog.imgSrc}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                  {/* <a
                    className="mt-4 inline-block text-primary-main hover:text-primary-main"
                    href={blog.link}
                  >
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
