import React from 'react'
import HeroSection2 from '../_components/hero-section2'
import Image from 'next/image';

export default function page() {
    const blogData = [
        {
          id: 1,
          title: "Understanding Global Trade Regulations",
          category: "Export-Import Basics",
          description: "Learn the key trade regulations and compliance requirements to streamline your international export and import operations.",
          image: "/assets/images/blogs/trade-regulations.jpg",
          link: "/blog/global-trade-regulations",
          date: "2025-01-20"
        },
        {
          id: 2,
          title: "Top Export Markets for Small Businesses",
          category: "Market Insights",
          description: "Explore the top international markets for small businesses and the steps to successfully establish your presence abroad.",
          image: "/assets/images/blogs/export-markets.jpg",
          link: "/blog/top-export-markets",
          date: "2025-01-18"
        },
        {
          id: 3,
          title: "Mastering Freight Forwarding in 2025",
          category: "Logistics",
          description: "A comprehensive guide to choosing the right freight forwarding partners and optimizing shipping routes for export and import businesses.",
          image: "/assets/images/blogs/freight-forwarding.jpg",
          link: "/blog/mastering-freight-forwarding",
          date: "2025-01-15"
        },
        {
          id: 4,
          title: "Customs Clearance: Tips for Hassle-Free Processing",
          category: "Customs Procedures",
          description: "Discover strategies for smooth customs clearance and avoid delays in your international shipments.",
          image: "/assets/images/blogs/customs-clearance.jpg",
          link: "/blog/customs-clearance-tips",
          date: "2025-01-12"
        },
        {
          id: 5,
          title: "Exporting to Emerging Markets: Opportunities and Challenges",
          category: "Market Opportunities",
          description: "Explore the potential of exporting to emerging markets and the challenges you may face in these dynamic economies.",
          image: "/assets/images/blogs/emerging-markets.jpg",
          link: "/blog/exporting-to-emerging-markets",
          date: "2025-01-10"
        },
        {
          id: 6,
          title: "Optimizing Supply Chain for Import Businesses",
          category: "Supply Chain Management",
          description: "Learn how to reduce costs, improve efficiency, and streamline your supply chain operations in import businesses.",
          image: "/assets/images/blogs/supply-chain.jpg",
          link: "/blog/optimizing-supply-chain",
          date: "2025-01-08"
        },
        {
          id: 7,
          title: "Shipping Incoterms Explained: A Guide for Exporters",
          category: "Trade Knowledge",
          description: "Understand the most commonly used shipping Incoterms and their implications for international trade agreements.",
          image: "/assets/images/blogs/incoterms.jpg",
          link: "/blog/shipping-incoterms-explained",
          date: "2025-01-05"
        },
        {
          id: 8,
          title: "The Role of Technology in Modern Export-Import",
          category: "Technology in Trade",
          description: "Discover how technology like blockchain, AI, and IoT is revolutionizing the export-import industry.",
          image: "/assets/images/blogs/technology-trade.jpg",
          link: "/blog/technology-in-export-import",
          date: "2025-01-03"
        },
        {
          id: 9,
          title: "Navigating Trade Tariffs and Taxes",
          category: "Trade Finance",
          description: "A detailed guide on how to manage trade tariffs and taxes to maintain profitability in global trade.",
          image: "/assets/images/blogs/trade-tariffs.jpg",
          link: "/blog/trade-tariffs-and-taxes",
          date: "2025-01-01"
        }
      ];
      
      
  return (
    <div>
        <HeroSection2 name={'Blogs'} img={'https://importexportfederation.com/wp-content/uploads/2023/11/19964835_6184552.jpg'} />
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-7xl mx-auto">
        {blogData.map((blog) => (
        <li key={blog.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-primary-main font-semibold text-lg">
              <span className={`mb-1 block text-sm leading-6 ${blog.categoryColor}`}>
                {blog.category}
              </span>
              {blog.title}
            </h3>
            <p className="text-secondary-main text-base mt-2">{blog.description}</p>
          </div>
          <div className='relative mb-6 shadow-md rounded-lg overflow-hidden bg-secondary-main/10 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full h-44'>
            <img
                className="object-cover h-full w-full"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuk3AbSkHOFSLuTFFPe2mcjoq2nHVgGD7k2w&s"}
                alt={blog.title}
            />

          </div>
        </li>
      ))}
            
        </ul>
    </div>
  )
}
