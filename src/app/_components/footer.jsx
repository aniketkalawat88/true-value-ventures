import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary-main text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 md:gap-14 sm:gap-8 gap-4 px-6">
        <div className="col-span-2">
          <h4 className="font-bold mb-4">About Us</h4>
          <p>
            We specialize in the export and import of fresh fruits and vegetables, connecting local farmers with global markets. 
            Our commitment to quality, sustainability, and timely delivery has made us a trusted name in international trade.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="md:space-y-2 space-y-1">
            <li>
              <Link className="hover:text-gray-300" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/services">
                Our Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
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
          className='h-10'
          src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240501175105.jpg"
          width={100}
        />
      </div>
        <div className="col-span-2">
          <h4 className="font-bold mb-4">Contact Information</h4>
          <p>Dubai Deira, Port Saeed, Al Sayegh Building</p>
          <p className="my-2 flex items-center space-x-2">
            <Link href="tel:+98765432100" className="max-md:block">+98765432100</Link>
            <Link href="tel:+9647509252524">+9647509252524</Link>
          </p>
          <p className="my-2">info@global-trade.com</p>
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
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Global Trade Solutions. All rights reserved.</p>
        <p>
          Powered by{" "}
          <Link className="hover:text-gray-300" href="http://www.obsidiansix.com">
            Obsidian Six
          </Link>
        </p>
      </div>
    </footer>
  );
}
