import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
  <footer className="bg-primary-main text-white py-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 md:gap-14 sm:gap-8 gap-4 px-6">
      <div className='col-span-2'>
        <h4 className="font-bold mb-4">About us</h4>
        <p>
        Khonshnaw vegetables & fruits Trading Company specializes in export of Fresh Fruits and
          Vegetables across the world. Our expertise combined with years of
          experience and inter personal relationships with farmers promises our
          customers the best quality products and the most competitive prices.
        </p>
      </div>
      <div className='col-span-1'>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className='md:space-y-3 space-y-1'>
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
            <Link className="hover:text-gray-300" href="/products">
              Our Products
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
      <div className='col-span-2'>
        <h4 className="font-bold mb-4">Our Office</h4>
        <p>
        Dubai diera port saeed  AL Sayegh Building
        </p>
        <p className='my-2 flex items-center space-x-2'>
          <Link href={'tel:+98765432100'} className='max-md:block'>+98765432100</Link>
          <Link href={'tel:+9647509252524'}>+9647509252524</Link></p>
        <p className='my-2'>info@khonshnaw.com</p>
        <div className="flex space-x-4 mt-4">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>Khonshnaw Trading Company. All rights reserved.</p>
      <p>
        Managed By {" "}
        <Link className="hover:text-gray-300" href="http://www.obsidiansix.com">
           Obsidian Six
        </Link>
      </p>
    </div>
  </footer>
  )
}