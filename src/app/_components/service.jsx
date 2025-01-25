import React from "react";
import { aboutVariants, MotionDiv } from "../utils/motion-div";
import Link from "next/link";

export default function Service() {
  // Array of services
  const services = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our processes and customer service interactions.",
      imgSrc:
        "https://images.news18.com/news18marathi/uploads/2024/06/vadhavan-2024-06-bb3d1abaf53c10c06ebe5ef3f70f9b3e-3x2.jpg?im=FitAndFill=(540,360)",
      link: "#",
    },
    {
      title: "Commitment",
      description:
        "We are committed to adopting best practices in business operations, ensuring that we honor our deliverables to all stakeholders.",
      imgSrc:
        "https://etimg.etb2bimg.com/photo/103639775.cms",
      link: "#",
    },
    {
      title: "Respect for Individual",
      description:
        "We foster a culture of trust, respect, and diversity within our organization, ensuring that everyone is valued.",
      imgSrc:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/454236013/ZA/FP/MP/205227275/sea-freight-service-500x500.jpeg",
      link: "#",
    },
    // {
    //   title: "Contribute to the Society",
    //   description:
    //     "We believe in creating value through improvements in healthcare, education, and caring for the environment.",
    //   imgSrc:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9z2lReJhhRNVbwlnbRzF69jWsH8kSHJhVNoR&s",
    //   link: "#",
    // },
    // {
    //   title: "Customer First",
    //   description:
    //     "Our products and services are driven by the needs and feedback of our customers. We build long-term relationships by adding value to their processes.",
    //   imgSrc:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VZ0Z5c8KBl8dKv3z_qpMymLr-2A3FiKYTY48dw",
    //   link: "#",
    // },
  ];

  return (
    <section className="md:my-10 my-6 bg-white">
      <div className="max-w-7xl mx-auto text-center overflow-hidden">
        <h2 className="md:text-3xl text-2xl font-bold text-primary-main">
          OUR SERVICES
        </h2>
        <div className="flex flex-wrap justify-center md:mt-8">
          {services.map((service, index) => (
            <MotionDiv
              variants={aboutVariants}
              initial="hiddenRight"
              whileInView={"visibleRight"}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 * index }}
              key={index}
              className="w-full md:w-1/3 p-4"
            >
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
                <div className="grid grid-cols-2 border border-primary-main rounded-b-lg mf:text-base text-sm">
                  <Link href={'tel:+916260451165'} className="bg-primary-main text-white p-2 text-center">
                    Call Now
                  </Link>
                  <Link href={'#contact'} className="text-primary-main p-2">
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
