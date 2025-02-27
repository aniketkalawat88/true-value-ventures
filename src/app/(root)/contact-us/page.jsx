import React from "react";
import HeroSection2 from "../_components/hero-section2";
import HappyClient from "../_components/happy-client";
import Testimonal from "../_components/testimonal";
import ContactUS from "../_components/contact-us";
import ContactMap from "./_components/contact-map";
import { MotionDiv, MotionH2 } from "../utils/motion-div";

export default function ContactUs() {
  const variants = {
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startUp: { y: 100, opacity: 0 },
    endUp: { y: 0, opacity: 1 },
  };

  return (
    <>
      <HeroSection2
        name={"Contact Us"}
        img={
          "https://study.com/cimages/videopreview/videopreview-full/2gddp5q8k4.jpg"
        }
      />

      <section className="my-10">
        <div className="max-w-7xl mx-auto px-6">
          <MotionH2
            variants={variants}
            initial={variants.start}
            whileInView={variants.end}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:text-3xl text-2xl font-bold text-secondary-main mb-6 md:mb-10 text-center"
          >
            Why Choose TRUE VALUE VENTURES?
          </MotionH2>
          <div className="max-w-7xl mx-auto">
            <MotionDiv
              variants={variants}
              initial={variants.startUp}
              whileInView={variants.endUp}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white p-4 shadow-md text-center">
                <i className="fas fa-check-circle text-secondary-main text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p>
                  For us, Integrity implies honesty and transparency in our
                  business processes and the highest level of ethical behavior
                  and professional act in customer services.
                </p>
              </div>
              <div className="bg-white p-4 shadow-md text-center">
                <i className="fas fa-handshake text-secondary-main text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p>
                  Customer demands for our products and their feedbacks are
                  driving force for our growth and development. We create
                  long-term relationships with customers through value addition
                  in their products and processes.
                </p>
              </div>
              <div className="bg-white p-4 shadow-md text-center">
                <i className="fas fa-people-arrows text-secondary-main text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Commitment</h3>
                <p>
                  We are committed to all our stakeholders adopting best
                  practices in business operations to honor our deliverables to
                  every person, entity, or organization associated with us.
                </p>
              </div>
            </MotionDiv>
          </div>

          <section className="max-w-7xl mx-auto my-10">
            <MotionDiv
              variants={variants}
              initial={variants.startUp}
              whileInView={variants.endUp}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white p-4 shadow-md text-center">
                <i className="fas fa-seedling text-secondary-main text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">
                  Respect for Individual
                </h3>
                <p>
                  We are committed to creating a work culture that encourages
                  trust in the organization, respects individuals, and values
                  diversity within the organization.
                </p>
              </div>
              <div className="bg-white p-4 shadow-md text-center">
                <i className="fas fa-globe text-secondary-main text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">
                  Contribute to the Society
                </h3>
                <p>
                  We believe that our responsibility as a member of society is
                  to create value through improvements in healthcare, education,
                  and caring for the environment.
                </p>
              </div>

              <div className="bg-white p-4 shadow-md text-center">
                <i className="fas fa-award text-secondary-main text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">
                  Uncompromised Quality
                </h3>
                <p>
                  Continuous improvement and strict quality controls for
                  superior products.
                </p>
              </div>
            </MotionDiv>
          </section>
        </div>
      </section>
      <ContactMap />
    </>
  );
}
