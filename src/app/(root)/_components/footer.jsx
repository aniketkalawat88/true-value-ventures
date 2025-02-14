import Link from "next/link";
import React from "react";
import { MotionDiv } from "../utils/motion-div";

export default function Footer() {
  const aboutVariants = {
    hiddenTop: {
      y: -100,
      opacity: 0,
    },
    visibleTop: {
      y: 0,
      opacity: 1,
      staggerChildren: 0.3,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
    hiddenBottom: {
      y: 200,
      opacity: 0,
    },
    visibleBottom: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <footer className="bg-primary-main text-white py-8">
      <MotionDiv
        variants={aboutVariants}
        initial={aboutVariants.hiddenBottom}
        whileInView={aboutVariants.visibleBottom}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 md:gap-14 sm:gap-8 gap-4 px-6"
      >
        <div className="col-span-2">
          <h4 className="font-bold mb-4">About Us</h4>
          <p>
            We specialize in the export and import of fresh fruits, vegetables,
            and essential goods, connecting local farmers and suppliers with
            global markets. Our focus on quality, sustainability, and timely
            delivery ensures we are a trusted partner in international trade.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="md:space-y-2 space-y-1">
            <li>
              <Link className="hover:text-secondary-main transition-transform" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-main transition-transform" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-main transition-transform" href="/services">
                Our Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-main transition-transform" href="/blogs">
                Our Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-main transition-transform" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-bold mb-4">Business Certified</h4>
          <img
            alt="Verified by certification"
            className="mb-4 h-16"
            height={50}
            src="https://storage.googleapis.com/a1aa/image/7e7Gy9w8uq1qRyHgQwsMq2umNhWVYIO2SgMfccXdm1f5ymePB.jpg"
            width={100}
          />
          <img
            alt="Trusted Seller certification"
            height={50}
            className="h-10"
            src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240501175105.jpg"
            width={100}
          />
        </div>
        <div className="col-span-2">
          <h4 className="font-bold mb-4">Contact Information</h4>
          <p> Flaming-8, Aakriti Eco City, Bhopal-462039 (India)</p>
          <p className="my-2">
            Phone: <Link href="tel:+919993185960" className="hover:text-secondary-main transition-transform">+91 9993185960</Link>
          </p>
          <p>
            Email:{" "}
            <Link href="mailto:admin@truevalueventures.in" className="hover:text-secondary-main transition-transform">
            admin@truevalueventures.in
            </Link>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </MotionDiv>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} True Value Ventures. All rights
          reserved.
        </p>
        <p>
          Powered by{" "}
          <Link
            className="hover:text-gray-300"
            href="http://www.obsidiansix.com"
          >
            Obsidian Six
          </Link>
        </p>
      </div>
    </footer>
  );
}
