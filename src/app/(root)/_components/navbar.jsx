"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { MotionDiv, MotionNav } from "../utils/motion-div";

export default function Navbar() {
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
  const path = usePathname();
  const arr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Products",
      link: "/services",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <>
      <header className="bg-primary-main/80 text-white">
        <MotionDiv
          variants={aboutVariants}
          initial={aboutVariants.hiddenTop}
          animate={aboutVariants.visibleTop}
          className="max-w-7xl mx-auto flex justify-between items-center py-4 md:px-0 px-2"
        >
          <div className="flex items-center md:space-x-4 max-md:justify-between w-full md:text-base sm:text-sm max-md:text-xs px-2">
            <div className="flex max-md:flex-col items-center md:space-x-4 space-x-1">
              <div className="flex items-center space-x-2 hover:text-secondary-main transition-transform">
                <IoCall />
                <Link href="tel:+919993185960">+91 9993185960</Link>
              </div>
              <div className="flex items-center space-x-2">
                {/* <MdMail className=" md:hidden"></MdMail> {" "} */}
                {/* <Link href={"tel:+9647509252524"} className="max-md:block w-full " >+9647509252524</Link> */}
              </div>
            </div>
            <div className="space-x-2 flex items-center hover:text-secondary-main transition-transform">
              <MdMail className="" />
              <Link href="mailto:admin@truevalueventures.in">
                admin@truevalueventures.in
              </Link>
            </div>
          </div>
          <div className="md:flex space-x-4 hidden">
            <Link href="#" className="hover:text-secondary-main transition-transform">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-secondary-main transition-transform">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-secondary-main transition-transform">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </MotionDiv>
      </header>
      <nav className="bg-white text-secondary-main max-w-7xl mx-auto overflow-hidden ">
        <MotionDiv
          variants={aboutVariants}
          initial={aboutVariants.hiddenBottom}
          animate={aboutVariants.visibleBottom}
          className="flex justify-between items-center md:py-2 py-2 md:px-0 px-4 "
        >
          <Link href={'/'} className="flex items-center">
            <img
              alt="Company Logo"
              className="md:h-16 h-12 object-contain md:scale-125"
              src="/logo3.png"
            />
          </Link>
          <div>
          <ul className="flex md:space-x-14 sm:space-x-3 space-x-2">
            {arr.map((ele, i) => (
              <li key={i}>
                <Link
                  className={`hover:text-gray-300 md:text-lg sm:text-base text-xs font-medium ${
                    ele.link === path ? "text-primary-main" : ""
                  }`}
                  href={ele.link}
                >
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>

          </div>
        </MotionDiv>
      </nav>
    </>
  );
}
