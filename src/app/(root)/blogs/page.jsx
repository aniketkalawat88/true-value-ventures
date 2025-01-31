"use client"

import React, { useEffect, useState } from "react";
import HeroSection2 from "../_components/hero-section2";
import Link from "next/link";
import axios from "axios";

export default function BlogPage() {
  // const blogData = [
  //   {
  //     id: 1,
  //     title: "Understanding Global Trade Regulations",
  //     category: "Export-Import Basics",
  //     description:
  //       "Learn the key trade regulations and compliance requirements to streamline your international export and import operations.",
  //     image: "/assets/images/blogs/trade-regulations.jpg",
  //     link: "/blog/global-trade-regulations",
  //     date: "2025-01-20",
  //   },
  //   {
  //     id: 2,
  //     title: "Top Export Markets for Small Businesses",
  //     category: "Market Insights",
  //     description:
  //       "Explore the top international markets for small businesses and the steps to successfully establish your presence abroad.",
  //     image: "/assets/images/blogs/export-markets.jpg",
  //     link: "/blog/top-export-markets",
  //     date: "2025-01-18",
  //   },
  //   {
  //     id: 3,
  //     title: "Mastering Freight Forwarding in 2025",
  //     category: "Logistics",
  //     description:
  //       "A comprehensive guide to choosing the right freight forwarding partners and optimizing shipping routes for export and import businesses.",
  //     image: "/assets/images/blogs/freight-forwarding.jpg",
  //     link: "/blog/mastering-freight-forwarding",
  //     date: "2025-01-15",
  //   },
  //   {
  //     id: 4,
  //     title: "Customs Clearance: Tips for Hassle-Free Processing",
  //     category: "Customs Procedures",
  //     description:
  //       "Discover strategies for smooth customs clearance and avoid delays in your international shipments.",
  //     image: "/assets/images/blogs/customs-clearance.jpg",
  //     link: "/blog/customs-clearance-tips",
  //     date: "2025-01-12",
  //   },
  //   {
  //     id: 5,
  //     title: "Exporting to Emerging Markets: Opportunities and Challenges",
  //     category: "Market Opportunities",
  //     description:
  //       "Explore the potential of exporting to emerging markets and the challenges you may face in these dynamic economies.",
  //     image: "/assets/images/blogs/emerging-markets.jpg",
  //     link: "/blog/exporting-to-emerging-markets",
  //     date: "2025-01-10",
  //   },
  //   {
  //     id: 6,
  //     title: "Optimizing Supply Chain for Import Businesses",
  //     category: "Supply Chain Management",
  //     description: "Learn how to reduce costs, improve efficiency, and streamline your supply chain operations in import businesses.",
  //     image: "/assets/images/blogs/supply-chain.jpg",
  //     link: "/blog/optimizing-supply-chain",
  //     date: "2025-01-08"
  //   },
  //   {
  //     id: 7,
  //     title: "Shipping Incoterms Explained: A Guide for Exporters",
  //     category: "Trade Knowledge",
  //     description: "Understand the most commonly used shipping Incoterms and their implications for international trade agreements.",
  //     image: "/assets/images/blogs/incoterms.jpg",
  //     link: "/blog/shipping-incoterms-explained",
  //     date: "2025-01-05"
  //   },
  //   {
  //     id: 8,
  //     title: "The Role of Technology in Modern Export-Import",
  //     category: "Technology in Trade",
  //     description: "Discover how technology like blockchain, AI, and IoT is revolutionizing the export-import industry.",
  //     image: "/assets/images/blogs/technology-trade.jpg",
  //     link: "/blog/technology-in-export-import",
  //     date: "2025-01-03"
  //   },
  //   {
  //     id: 9,
  //     title: "Navigating Trade Tariffs and Taxes",
  //     category: "Trade Finance",
  //     description: "A detailed guide on how to manage trade tariffs and taxes to maintain profitability in global trade.",
  //     image: "/assets/images/blogs/trade-tariffs.jpg",
  //     link: "/blog/trade-tariffs-and-taxes",
  //     date: "2025-01-01"
  //   }
  // ];
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`); // Replace with your backend URL
        console.log(response.data.blogs)
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <HeroSection2
        name={"Blogs"}
        img={
          "https://importexportfederation.com/wp-content/uploads/2023/11/19964835_6184552.jpg"
        }
      />
      {
        loading ? <div className="max-w-7xl w-full h-96 text-center"> Loading...</div> :
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-7xl mx-auto">
        {blogs.map((blog , i) => (
          <li
            key={i}
            className="relative flex flex-col items-start bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-4 flex flex-col">
              <span className="text-sm text-gray-500 mb-2">{blog.category}</span>
              <h3 className="text-lg font-bold text-primary-main mb-3">{blog.title}</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">{blog.description}</p>
              <Link
                href={`/blogs/${blog._id}`}
                className="mt-auto inline-block text-sm font-medium text-primary-main hover:underline"
              >
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
      }
    </div>
  );
}